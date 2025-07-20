// src/app/app.component.ts
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { projects, Project } from '../data/projects';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent implements AfterViewInit {
  title = 'dev_portfolio';
  isMenuOpen: boolean = false;
  tigerReplaced: boolean = false;
  tigerAnimating: boolean = false;
  isAnimating: boolean = false; // ตัวแปรควบคุมการเล่นแอนิเมชัน
  private tigerAnimationTimeout: any; // สำหรับเก็บ setTimeout ID
  private tigerStaticAnimDuration: number = 700; // ระยะเวลาของ @keyframes tiger-static-float-in (0.7s)

  // Projects
  projects: Project[] = projects;
  selectedProject: Project | null = null;

  isDialogVisible = false;
  isClosing = false;

  selectProject(project: any) {
    this.selectedProject = project;
    this.isDialogVisible = true;
    this.isClosing = false;
  }

  closePanel() {
    this.isClosing = true;
    setTimeout(() => {
      this.isDialogVisible = false;
      this.selectedProject = null;
    }, 200); // match fadeOut duration
  }

  // Handle click outside the detail panel
  onClickOutside(event: MouseEvent) {
    const panel = document.querySelector('.detail-panel');
    const target = event.target as HTMLElement;

    // ถ้าไม่ได้คลิกที่ panel และ panel กำลังแสดงอยู่
    if (
      panel &&
      !panel.contains(target) &&
      this.selectedProject &&
      !this.isClosing
    ) {
      this.closePanel();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(targetId: string) {
    const mainWrapper = document.getElementById('mainScrollWrapper');
    const target = document.querySelector(targetId);

    if (mainWrapper && target) {
      gsap.to(mainWrapper, {
        scrollTo: { y: (target as HTMLElement).offsetTop },
        duration: 1.3,
        ease: 'power2.inOut',
      });
    }
  }

  animationInitialized = false; // เพิ่มตัวแปร flag

  ngAfterViewInit(): void {
    this.animationInitialized = true;
    requestAnimationFrame(() => {
      // Your GSAP animations here

      const sections = [
        'heroSection',
        'aboutSkillsSection',
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
            duration: 1.2,
            // delay: 0.8, // ดีเลย์สักครู่ก่อนแสดง
            ease: 'power3.out',
            onComplete: () => {
              // Animate เนื้อหาใน Hero
              const heroContent = heroSection.querySelector('.section-content');
              if (heroContent) {
                gsap.to(Array.from(heroContent.children), {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
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

            gsap.to(el, {
              scrollTrigger: {
                trigger: el,
                scroller: '#mainScrollWrapper',
                start: 'top 85%',
                end: 'bottom 60%',
                toggleActions: 'play reverse play reverse', // ทำงานทั้งเลื่อนลงและเลื่อนขึ้น
                markers: false,
              },
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1,
              ease: 'power3.out',
            });
          }
        });
      }, 400); // ⏱ ให้เวลา DOM settle ก่อน scrollTrigger ลงทะเบียน

      // Custom scroll snap smoothing
      const mainWrapper = document.getElementById('mainScrollWrapper');
      const projectSection = document.getElementById('projectsSection');
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

            // if (this.isDialogVisible) {
            //   e.preventDefault(); // ❌ Block scroll snap logic
            //   return;
            // }

            const now = Date.now();
            if (now - lastScrollTime < 1000) {
              e.preventDefault();
              return;
            }

            // ถ้า scroll แรงเกิน (เช่น scroll mouse gaming mouse)
            if (Math.abs(e.deltaY) > 200) {
              e.preventDefault();
              return;
            }

            const currentScroll = mainWrapper.scrollTop;
            const currentIdx = getNearestSectionIdx(currentScroll);
            let targetIdx = currentIdx;

            if (e.deltaY > 30 && currentIdx < sectionEls.length - 1) {
              targetIdx = currentIdx + 1;
            } else if (e.deltaY < -30 && currentIdx > 0) {
              const currentSectionTop = sectionEls[currentIdx].offsetTop;

              if (currentScroll <= currentSectionTop + 10) {
                targetIdx = currentIdx - 1;
              } else {
                return;
              }
            } else {
              return;
            }

            if (targetIdx === currentIdx) return;

            e.preventDefault();
            isAnimating = true;
            lastScrollTime = now;

            const targetTop = sectionEls[targetIdx].offsetTop;
            gsap.to(mainWrapper, {
              scrollTo: { y: targetTop },
              duration: 1.3,
              ease: 'power2.inOut',
              onComplete: () => {
                // ✅ ปลดล็อกหลัง delay พอสมควร
                setTimeout(() => {
                  isAnimating = false;
                }, 200);
              },
            });
          },
          { passive: false }
        );
      }
    });
  }

  scrollToNextSection() {
    const nextSection = document.getElementById('aboutSection');
    const mainWrapper = document.getElementById('mainScrollWrapper');

    if (nextSection && mainWrapper) {
      // เพิ่ม animation ขณะเลื่อน
      gsap.to(mainWrapper, {
        scrollTo: { y: nextSection.offsetTop, autoKill: false },
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: () => {
          // เพิ่ม effect ขณะเลื่อน
          gsap.to('.scroll-down-indicator', {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
          });
        },
        onComplete: () => {
          // คืนค่าเมื่อเลื่อนเสร็จ
          gsap.to('.scroll-down-indicator', {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.5,
          });
        },
      });
    }
  }

  onHeroMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2; // -1 ถึง 1
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2; // -1 ถึง 1
    // ปรับมุมเอียงให้ดูพอดี
    target.style.setProperty('--x', `${x * 8}deg`);
    target.style.setProperty('--y', `${-y * 8}deg`);
  }
  tigerMouseEnter() {
    clearTimeout(this.tigerAnimationTimeout); // ล้าง timeout เก่าของเสือ
    // รีเซ็ตสถานะเสือเพื่อพร้อมใช้งานใหม่
    this.tigerReplaced = false;
    this.tigerAnimating = false;
  }

  tigerMouseLeave() {
    // เริ่มแอนิเมชันเสือ
    this.tigerAnimating = true; // เริ่มแอนิเมชันเสือ static-float-in
    this.tigerReplaced = true; // เปลี่ยนเป็นแสดงเสือแบบ static

    // รอให้แอนิเมชัน tiger-static-float-in จบ
    this.tigerAnimationTimeout = setTimeout(() => {
      this.tigerAnimating = false; // ปิดคลาสแอนิเมชันเสือ
    }, this.tigerStaticAnimDuration);
  }

  getTechIcon(tech: string): string {
    const icons = {
      Vue: 'fab fa-vuejs',
      Golang: 'fab fa-golang',
      TypeScript: 'fab fa-js',
      MongoDB: 'fas fa-database',
      Docker: 'fab fa-docker',
      Nuxt: 'fab fa-nuxt-js',
      NestJS: 'fas fa-server',
      SQL: 'fas fa-database',
      GraphQL: 'fas fa-project-diagram',
      Java: 'fab fa-java',
      // ... เพิ่มเติมตามเทคโนโลยี
    };
    return icons[tech as keyof typeof icons] || 'fas fa-code';
  }
}
