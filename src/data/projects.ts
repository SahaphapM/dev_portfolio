// ✅ แนะนำให้สร้างไฟล์ใหม่เพื่อเก็บข้อมูลโปรเจกต์ เช่น:
// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Skill Mapping System',
    description:
      'Dashboard for curriculum/skills tracking using Quasar + Prisma. Involved in full-stack development, database design (tree structure), and tech stack migration.',
    fullDescription: `
      ในโปรเจกต์นี้ ผมได้เรียนรู้กระบวนการพัฒนาซอฟต์แวร์แบบครบวงจร เริ่มจากการรับ Requirement จากอาจารย์ และทำความเข้าใจระบบอย่างถ่องแท้ เพื่อนำไปสู่การออกแบบ Database Relational ที่รองรับโครงสร้างข้อมูลที่ซับซ้อน โดยเฉพาะอย่างยิ่งการพัฒนาและจัดการ Database ในรูปแบบ Tree Structure ซึ่งเป็นความท้าทายที่น่าสนใจ

      ผมรับผิดชอบในการพัฒนา Frontend ในส่วนของหน้า User, Teacher และ Curriculum Summary รวมถึงการแก้ไข Bug ต่างๆ ที่เกิดขึ้น นอกจากนี้ยังจัดเตรียม Backend API ให้กับ Frontend ไม่ว่าจะเป็น Query, Pagination, Filter และฟังก์ชันอื่นๆ ที่จำเป็น โดยเฉพาะการจัดการ Query ที่เป็น Tree Structure ที่มีความซับซ้อน ซึ่งต้องใช้ความเข้าใจและทักษะในการจัดการข้อมูลสูง

      จุดเด่นของโปรเจกต์นี้คือการที่ผมได้มีประสบการณ์ในการปรับเปลี่ยนเทคโนโลยีหลัก จาก Vuetify เป็น Quasar และจาก TypeORM เป็น Prisma ซึ่งแสดงให้เห็นถึงความสามารถในการปรับตัวและเรียนรู้เทคโนโลยีใหม่ๆ ได้อย่างรวดเร็ว เทคโนโลยีที่ใช้ได้แก่ Vuetify/Quasar, NestJS, TypeORM/Prisma, และ SQL

      ความท้าทายและการแก้ไขปัญหา:
      - ความเข้าใจ Process หรือ Design Database ของทีม: ผมแก้ปัญหาด้วยการจัดประชุม และวาดหรือยกตัวอย่าง Process ให้เห็นภาพ ด้วย Miro เพื่อให้ทีมมีความเข้าใจตรงกันและลดความผิดพลาด
      - Requirement ที่ไม่มั่นคง: เมื่อมีการเปลี่ยนแปลง Process ผมได้สอบถามกับอาจารย์เพื่อความชัดเจน และเตรียมตัวรับมือเพื่อรองรับการแก้ไขในทันที ทำให้การปรับเปลี่ยนเป็นไปอย่างรวดเร็ว
      - การเปลี่ยนแปลง Tech Stack ระหว่างทาง: การเปลี่ยนเทคโนโลยีหลักเป็นเรื่องท้าทาย แต่ผมได้ปรับตัวให้ทัน ด้วยการค้นคว้าและศึกษาวิธีใช้งานเทคโนโลยีใหม่ๆ อย่างรวดเร็ว
      - ปัญหาการ Log Error ที่ไม่ละเอียด: TypeORM มีปัญหาเรื่อง DTO Validation ที่ทำให้ Log Error ไม่ละเอียด ผมแก้ด้วยการเปลี่ยนไปใช้ Prisma ซึ่งมีการ Log Error ที่ละเอียดกว่า ทำให้สามารถหาสาเหตุของ Error ได้ง่ายขึ้น
      - ความไม่ต่อเนื่องของการทำงาน: เพื่อลดปัญหาการต้องกลับมาทำความเข้าใจ Process หรือระบบซ้ำๆ ผมได้จัดทำเอกสารและ Diagram ที่ชัดเจน เพื่อให้สามารถทบทวนและทำงานต่อได้อย่างราบรื่น
    `,
    image: '/assets/img/projects/skillmapping.png',
    technologies: ['Quasar', 'Prisma', 'NestJS', 'TypeORM', 'SQL'],
  },
  {
    title: 'Cooperative Training',
    description:
      'OCR-powered certificate hours, secure auto-deploy via GitHub Runner & Cloudflare Tunnel. Developed user-friendly frontend, Golang backend, and optimized MongoDB queries.',
    fullDescription: `
      ในโปรเจกต์นี้ ผมรับผิดชอบในการพัฒนาระบบจองการอบรมออนไลน์ โดยเน้นการพัฒนา Frontend User Layout ที่ใช้งานง่ายและตอบโจทย์ผู้ใช้ และจัดเตรียม Backend API ของระบบหลักที่ใช้ Golang ในการประมวลผลข้อมูล

      นอกจากนี้ ผมยังได้ออกแบบ Database และพัฒนาฟังก์ชันสำคัญอย่าง Pagination และ Data Search Filter โดยใช้ MongoDB Complex Query Aggregation เพื่อการค้นหาข้อมูลที่มีประสิทธิภาพ

      สิ่งที่น่าสนใจในโปรเจกต์นี้คือการประยุกต์ใช้ OCR Model เพื่อดึงข้อมูลจากเอกสาร และพัฒนาไปถึงการ Tuning NER Model เพื่อเพิ่มความแม่นยำในการระบุข้อมูลเฉพาะ เทคโนโลยีที่ใช้ได้แก่ Vue Quasar, Golang, MongoDB, FastAPI, และ Docker ผมยังได้ดูแลในส่วนของการจัดเตรียมและดูแลการขึ้น Server รวมถึงการทำ GitHub Action Runner self-hosted เพื่อให้กระบวนการ Deploy เป็นไปอย่างอัตโนมัติและมีประสิทธิภาพ

      ความท้าทายและการแก้ไขปัญหา:
      - ความซับซ้อนของ MongoDB Aggregate Query: การขาดพื้นฐานในการใช้ Aggregate Query ของ MongoDB ทำให้โค้ดดูซับซ้อนและเข้าใจยาก ผมแก้ปัญหานี้ด้วยการศึกษาทำความเข้าใจทีละขั้นตอน จนสามารถเขียน Query ที่มีประสิทธิภาพและอ่านง่ายขึ้น
      - การออกแบบ Database ใน NoSQL สำหรับ Relational Data: การออกแบบ Database แบบ Relational แต่มาใช้ใน NoSQL ทำให้การจัดการและการ Query ยาก ผมแก้ด้วยการ Embedded ข้อมูลบางส่วนฝังไปใน Document เดียวกัน เพื่อลดการ Unwind และทำให้ Filter ข้อมูลได้ง่ายขึ้น
      - ความถูกต้องของ OCR ภาษาไทย: พบปัญหาเรื่องความถูกต้องของการดึงข้อมูลภาษาไทยด้วย OCR ผมแก้โดยการใช้ np.array แทนรูปภาพโดยตรง ซึ่งช่วยเพิ่มความแม่นยำในการประมวลผล
      - NER Model Tuning: แม้จะลองใช้ LLM ที่ฉลาด แต่ Model มีขนาดใหญ่และประมวลผลช้า จึงเลือกใช้ XLM ที่เฉพาะสำหรับ NER และยังคงต้องเพิ่มกระบวนการ Tuning Model ให้ฉลาดและแม่นยำยิ่งขึ้น โดยการทำ Input เป็น Tokenized Word ที่ถูกต้อง
    `,
    image: '/assets/img/projects/cooperative.png',
    technologies: [
      'Vue',
      'FastAPI',
      'MongoDB',
      'Golang',
      'Mongo Driver',
      'Docker',
      'GitHub Action',
      'OCR',
      'XLM Roberta',
    ],
    link: 'https://cooperative.sahapham.uk',
  },
  {
    title: 'Goodsuit Blog',
    description:
      'Headless CMS storefront using WordPress + Nuxt + GraphQL for a product display blog.',
    fullDescription: `
      สำหรับโปรเจกต์รับจ้างพัฒนาระบบแสดงสินค้าให้ร้าน Goodsuit ผมได้พัฒนาระบบจัดการส่วนของการสร้าง Post/Blog สำหรับแสดงสินค้า โดยออกแบบให้เป็น Blog Slider ที่ทันสมัยและน่าสนใจ

      ผมได้ประยุกต์ใช้ Nuxt ร่วมกับ Wordpress CMS Headless และ GraphQL Basic ซึ่งเป็นเทคโนโลยีที่ทันสมัยและเพิ่มความยืดหยุ่นในการจัดการคอนเทนต์ เทคโนโลยีที่ใช้คือ Nuxt, Wordpress CMS, และ GraphQL

      ความท้าทายและการแก้ไขปัญหา:
      - การเตรียมตัวสำหรับการประชุม: พบปัญหาการไม่ได้เตรียมตัวหรือรวบรวมคำถามสำหรับการประชุมเพื่อรับ Requirement ผมแก้ไขโดยการวางแผนและลิสต์คำถามที่ต้องการให้ชัดเจนก่อนการประชุมทุกครั้ง เพื่อให้ได้ข้อมูลที่ครบถ้วน
      - ขาดความเข้าใจ Tech Stack: การขาดความรู้ความเข้าใจเกี่ยวกับ Tech Stack ต่างๆ ทำให้ตามเพื่อนร่วมทีมไม่ทันและดำเนินงานช้า ผมแก้ด้วยการศึกษาทำความเข้าใจเทคโนโลยีที่เกี่ยวข้องอย่างลึกซึ้ง และขอคำแนะนำจากผู้มีประสบการณ์
      - ประสิทธิภาพในการทำงาน: แม้จะเป็นงานที่ใช้เวลาไม่นาน แต่กลับทำงานช้า ผมแก้ไขโดยการวางแผนงานที่ต้องทำโดยแบ่งเป็นส่วนเล็กๆ เพื่อให้สามารถ Focus และทำงานได้อย่างมีประสิทธิภาพมากขึ้น
    `,
    image: '/assets/img/projects/goodsuitbrand.png',
    technologies: ['WordPress', 'GraphQL', 'Nuxt'],
    link: 'https://www.goodsuitbrand.com/blogs',
  },
  {
    title: 'RTG Quotation System',
    description:
      'Fullstack app with PDF quotes, secured via Cloudflare Zero Trust. Managed web hosting, domain, and network security.',
    fullDescription: `
      ในโปรเจกต์รับจ้างนี้ ผมได้รับผิดชอบในการพัฒนา Fullstack ครบวงจร ตั้งแต่ Frontend และ Backend สำหรับระบบจัดการการซื้อขายและใบเสนอราคา ซึ่งรวมถึงการออกแบบ User Role, Layout, และ Database design ที่เหมาะสมกับธุรกิจ นอกจากนี้ยังดูแลเรื่อง Authentication และ Authorization ในฝั่ง Frontend เพื่อความปลอดภัยของข้อมูล

      สิ่งที่ท้าทายและเป็นประสบการณ์ที่ล้ำค่าคือการศึกษาเกี่ยวกับการ Host Web และ Secure Web อย่างจริงจัง ผมได้จัดการเรื่อง Deploy, Domain, การใช้ Vercel และ Railway Host Web รวมถึงการตั้งค่า Cloudflare DNS และ Cloudflare Zero Trust เพื่อกำหนด Rule การเข้าถึง Network ของบริษัท ซึ่งเป็นการเพิ่มความปลอดภัยและประสิทธิภาพให้กับระบบ เทคโนโลยีที่ใช้คือ Nuxt, NestJS, SQL, และ Docker

      ความท้าทายและการแก้ไขปัญหา:
      - ข้อจำกัดด้านเวลา: เนื่องจากต้องเรียนไปด้วยและมีงานซ้อนกัน ทำให้มีเวลาในการ Implement น้อย ผมแก้ด้วยการแบ่งเวลาและบริหารจัดการความเครียดในการทำงานอย่างมีประสิทธิภาพ
      - การส่งมอบงานที่ไม่สมบูรณ์: พบปัญหาการส่งมอบงานที่ยังไม่สมบูรณ์เนื่องจากไม่ได้ทำ Test Case และความเร่งด่วน ซึ่งเป็นบทเรียนสำคัญที่ต้องนำไปปรับปรุงในการทำงานครั้งต่อไป
    `,
    image: '/assets/img/projects/rtg.png',
    technologies: ['Nuxt', 'NestJS', 'Cloudflare', 'SQL', 'Docker'],
  },
  {
    title: 'HRD System (Internship)',
    description:
      'Backend development and database design for Human Resource Development system. Involved in API creation, frontend/backend development for user quiz module.',
    fullDescription: `
      ในบทบาท Developer Intern สำหรับระบบ HRD (Human Resource Development) ผมได้มีส่วนสำคัญในการวางรากฐานและพัฒนา backend ของระบบอย่างเต็มตัว โดยเฉพาะในส่วนของการออกแบบ Database Relational ที่มีความซับซ้อน ผมได้นำเสนอแนวคิดและหารือกับทีมอย่างใกล้ชิดเพื่อให้มั่นใจว่า database design นั้นถูกต้องและตอบโจทย์ความต้องการของระบบได้อย่างมีประสิทธิภาพ ผมยังเป็นกำลังสำคัญในการสร้างบรรยากาศการทำงานที่สบายใจ เปิดโอกาสให้มีการพูดคุยและแลกเปลี่ยนความคิดเห็นกันอย่างเปิดเผย

      นอกจากนี้ ผมยังรับผิดชอบในการวางแผน Design Blueprint สำหรับการรับส่งข้อมูลระหว่าง Frontend และ Backend ซึ่งเป็นสิ่งสำคัญเพื่อให้การพัฒนาราบรื่นและมีประสิทธิภาพ รวมถึงการทำความเข้าใจระบบในเชิงลึกเพื่อให้เห็นภาพรวมและรายละเอียดที่ชัดเจนสำหรับการพัฒนาในแต่ละส่วน ผมยังมีบทบาทในการประสานงานและกระจายงานให้กับน้องๆ ในทีม เพื่อให้ทุกคนมีส่วนร่วมและงานเดินหน้าไปได้โดยไม่ติดขัด

      ในส่วนของการ Implement ผมได้ดำเนินการสร้างและจัดเตรียม API รวมถึงการแก้ไขข้อผิดพลาดในฝั่ง Backend และพัฒนาทั้งส่วน Frontend และ Backend สำหรับระบบ User ทำ Quiz ซึ่งเป็นหัวใจสำคัญของระบบ HRD ในการประเมินทักษะของบุคลากร เทคโนโลยีหลักที่ผมได้ใช้ในโปรเจกต์นี้คือ Vue Quasar, NestJS, และ SQL

      ความท้าทายและการแก้ไขปัญหา:
      - Requirement ที่ไม่คงที่: ปัญหาหลักคือการเปลี่ยนแปลง Requirement ที่บ่อยครั้ง ทำให้ต้องปรับเปลี่ยนโครงสร้าง Database ทั้งหมด ในส่วนของ Quiz และ Evaluation เพื่อให้ระบบยืดหยุ่นและรองรับความต้องการที่เปลี่ยนไปได้อย่างรวดเร็ว
      - การบริหารจัดการทีม: พบปัญหาเรื่องการว่างงานของคนในทีม ผมจึงได้ริเริ่มกำหนดโมดูลและวางแผนการแบ่งงานอย่างชัดเจน เพื่อให้ทุกคนมีส่วนร่วมและงานเดินหน้าไปได้อย่างมีประสิทธิภาพสูงสุด
    `,
    image: '/assets/img/projects/hrd.png',
    technologies: ['Vue', 'Quasar', 'NestJS', 'SQL'],
  },
  {
    title: 'POS D.Coffee (Online Store)',
    description:
      'Developed Point of Sale, Promotion, and User Authentication systems for an online store. Contributed to team coordination and problem-solving.',
    fullDescription: `
      ในโปรเจกต์กลุ่มนี้ ผมมีส่วนร่วมในการพัฒนาระบบ POS (Point of Sale), ระบบ Promotion และ User Authentication ซึ่งเป็นหัวใจสำคัญของระบบขายของออนไลน์ เทคโนโลยีที่ใช้ได้แก่ Vue, Vuetify, TypeScript, NestJS, SQLite, และ phpMyAdmin

      ความท้าทายและการแก้ไขปัญหา:
      - การขาดผู้นำทีม: การทำงานแบบไม่มีคนนำทำให้งานไม่มีทิศทางที่ชัดเจน ผมแก้โดยการเสนอตัวเป็นผู้ช่วยประสานงาน และช่วยกำหนดทิศทางของโปรเจกต์ให้ชัดเจนขึ้น
      - การทำงานกับเพื่อนและความเกรงใจ: ความเกรงใจเพื่อนทำให้งานที่ได้ไม่มีความสมบูรณ์หรือไม่ได้คุณภาพ ผมเรียนรู้ที่จะสื่อสารและให้ Feedback อย่างตรงไปตรงมาแต่สร้างสรรค์ เพื่อให้งานมีคุณภาพที่ดีที่สุด
      - การแบ่งงานไม่ชัดเจน: การทำงานที่ไม่แบ่งงานอย่างชัดเจนทำให้เกิดการทำงานซ้อนสลับไปมาและลดคุณภาพการทำงาน ผมแก้โดยการเสนอให้มีการแบ่งงานและมอบหมายความรับผิดชอบอย่างชัดเจน ตั้งแต่เริ่มต้นโปรเจกต์
      - การหาปัญหา Error ที่ไม่มีประสิทธิภาพ: การใช้เวลานานในการหาปัญหา Error ผมแก้ไขโดยการคิดแบบ Logic และการเขียน Log ไล่หาถึงต้นตอของปัญหา ซึ่งช่วยให้แก้ Error ได้อย่างรวดเร็วและมีประสิทธิภาพมากขึ้น
    `,
    image: '/assets/img/projects/deecoffee.png',
    technologies: [
      'Vue',
      'Vuetify',
      'TypeScript',
      'NestJS',
      'SQLite',
      'phpMyAdmin',
    ],
  },
  {
    title: 'POS D.Coffee (Java)',
    description:
      'Developed Point of Sale and Promotion systems using Java. Focused on UI development with Java AWT and NetBeans.',
    fullDescription: `
      โปรเจกต์กลุ่มนี้เป็นการพัฒนาระบบ POS และ Promotion โดยใช้ Java ซึ่งเป็นการเรียนรู้พื้นฐานที่สำคัญ ผมได้มีส่วนร่วมในการสร้างส่วนหน้าจอของระบบด้วย Java AWT โดยใช้ NetBeans เทคโนโลยีที่ใช้คือ Java, NetBeans, และ SQLite

      ความท้าทายและการแก้ไขปัญหา:
      - การทำความเข้าใจ Error Log: พบปัญหาการไม่เข้าใจว่า Error เกิดจากอะไรและดู Log ไม่เป็น ซึ่งเป็นอุปสรรคสำคัญในการแก้ไขปัญหา ผมแก้ไขโดยการเรียนรู้การอ่าน Error Log อย่างละเอียด และพยายามทำความเข้าใจความหมายของข้อความ Error ต่างๆ
    `,
    image: '/assets/img/projects/deecoffee_java.png',
    technologies: ['Java', 'Java JWT', 'NetBeans', 'SQLite'],
  },
  {
    title: 'Consent Central (PDPA Hackathon)',
    description:
      'Designed a web application for centralized consent management, focusing on UX/UI and legal compliance with PDPA. Explored Webhook and secure authentication methods.',
    fullDescription: `
      ในกิจกรรม PDPA Hackathon ผมได้มีส่วนร่วมในการออกแบบ Web Application ที่เป็นศูนย์กลางของความยินยอม รวมถึงการออกแบบ UX/UI ที่ใช้งานง่ายและเป็นมิตรกับผู้ใช้ สิ่งที่น่าสนใจคือการได้ทำความเข้าใจเกี่ยวกับด้านกฎหมาย ร่วมกับเพื่อนทีมนิติศาสตร์ เพื่อประยุกต์เข้ากับแอปพลิเคชันให้ถูกต้องตามกฎหมาย PDPA

      ผมรับผิดชอบในการรวบรวมข้อมูลด้านเทคนิค และศึกษาการทำ Webhook, การ Authentication ที่ไม่เก็บข้อมูล User ด้วย Line, Gmail, ThaID ซึ่งเป็นแนวทางที่เน้นความเป็นส่วนตัวและปลอดภัยของข้อมูล

      ความท้าทาย:
      - การมองข้ามมุมมองผู้ใช้: ไม่สามารถทำให้เห็นภาพหรือประโยชน์ของระบบได้ชัดเจน เนื่องจากไม่ได้มองในมุมมองของผู้ใช้งาน
      - การจัดการที่ไม่ตรงตามเป้าหมาย: บางครั้งมีการแนะนำให้ทำส่วนอื่นที่คนเข้าใจง่ายแต่ไม่ตรงประเด็นที่อยากทำ
    `,
    image: '/assets/img/projects/consent_central.png',
    technologies: ['UX/UI Design', 'Webhook', 'Authentication'],
  },
];
