// src/app/app.component.ts
import { AfterViewInit, Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class App implements AfterViewInit {
  title = 'dev_portfolio';
  isMenuOpen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  animationInitialized = false; // เพิ่มตัวแปร flag

  ngAfterViewInit(): void {
    if (this.animationInitialized || !isPlatformBrowser(this.platformId))
      return;

    this.animationInitialized = true;
    requestAnimationFrame(() => {
      // Your GSAP animations here

      const sections = [
        'heroSection',
        'aboutSection',
        'skillsSection',
        'projectsSection',
        'ctaSection',
      ];

      setTimeout(() => {
        ScrollTrigger.refresh();

        const heroSection = document.getElementById('heroSection');
        if (heroSection) {
          // ซ่อน Hero Section ก่อนเริ่ม animation
          gsap.set(heroSection, { opacity: 0, y: 100 });

          // Animate Hero Section ทันที โดยไม่ต้องรอ Scroll
          gsap.to(heroSection, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            // delay: 0.8, // ดีเลย์สักครู่ก่อนแสดง
            ease: 'power3.out',
            onComplete: () => {
              // Animate เนื้อหาใน Hero
              const heroContent = heroSection.querySelector('.section-content');
              if (heroContent) {
                gsap.to(Array.from(heroContent.children), {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.3,
                  ease: 'power2.out',
                });
              }
            },
          });
        }

        const otherSections = sections.filter((id) => id !== 'heroSection');
        otherSections.forEach((id) => {
          const el = document.getElementById(id);
          if (el && el.offsetHeight > 0) {
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                scroller: '#mainScrollWrapper', // ✅ สำคัญ
                start: 'top 80%',
                toggleActions: 'play none none none',
                markers: false,
              },
              opacity: 0,
              y: 100,
              duration: 1,
              ease: 'power3.out',
            });

            const content = el.querySelector('.section-content');
            if (content) {
              gsap.fromTo(
                Array.from(content.children),
                {
                  opacity: 0,
                  y: 100,
                },
                {
                  scrollTrigger: {
                    trigger: el,
                    scroller: '#mainScrollWrapper', // ✅ สำคัญ
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    markers: false,
                  },
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                  stagger: 0.3,
                  ease: 'power2.out',
                }
              );
            }
          }
        });
      }, 600); // ⏱ ให้เวลา DOM settle ก่อน scrollTrigger ลงทะเบียน

      const mainWrapper = document.getElementById('mainScrollWrapper');
      if (!mainWrapper) {
        console.warn('MainWrapper not ready');
        return;
      }
      if (mainWrapper) {
        // Custom slow scroll snap for all sections
        let isAnimating = false;
        let lastScrollTime = 0;
        const sectionEls = sections
          .map((id) => document.getElementById(id))
          .filter((el) => !!el) as HTMLElement[];

        // Helper: Find nearest section index
        function getNearestSectionIdx(scrollTop: number) {
          let minDist = Infinity;
          let idx = 0;
          sectionEls.forEach((el, i) => {
            const dist = Math.abs(el.offsetTop - scrollTop);
            if (dist < minDist) {
              minDist = dist;
              idx = i;
            }
          });
          return idx;
        }

        // Custom wheel handler
        mainWrapper.addEventListener(
          'wheel',
          (e: WheelEvent) => {
            if (isAnimating) {
              e.preventDefault();
              return;
            }
            const now = Date.now();
            if (now - lastScrollTime < 800) {
              // Prevent rapid scrolls
              e.preventDefault();
              return;
            }
            const currentScroll = mainWrapper.scrollTop;
            const currentIdx = getNearestSectionIdx(currentScroll);
            let targetIdx = currentIdx;
            if (e.deltaY > 30 && currentIdx < sectionEls.length - 1) {
              targetIdx = currentIdx + 1;
            } else if (e.deltaY < -30 && currentIdx > 0) {
              targetIdx = currentIdx - 1;
            } else {
              return; // No section change
            }
            if (targetIdx === currentIdx) return;
            e.preventDefault();
            isAnimating = true;
            lastScrollTime = now;
            const targetTop = sectionEls[targetIdx].offsetTop;
            gsap.to(mainWrapper, {
              scrollTo: { y: targetTop },
              duration: 1.3, // slower scroll (seconds)
              ease: 'power2.inOut',
              onComplete: () => {
                isAnimating = false;
              },
            });
          },
          { passive: false }
        );
      }

      const track = document.getElementById('horizontalTrack');
      const wrapper = document.getElementById('horizontalProjects');

      if (track && wrapper) {
        const scrollLength = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -scrollLength,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: `+=${scrollLength}`,
            scrub: true,
            pin: true,
          },
        });
      }
    });
  }
}
