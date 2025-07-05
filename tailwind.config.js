// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#121212", // สีพื้นหลังเข้ม
        "text-light": "#F5F5DC", // สีข้อความอ่อน (ครีม/ขาวนวล) สำหรับธีมวินเทจ
        "accent-gold": "#DAA520", // สีทองสำหรับเน้น (Strategic/Luxury)
        "primary-dark-btn": "#0A6040", // สีเขียวเข้มสำหรับปุ่ม
        "border-dark": "#333333", // สีเส้นขอบเข้ม
        "neutral-950": "#0a0a0a", // สีดำสนิท (Tailwind default)
      },
      fontFamily: {
        // กำหนดฟอนต์สำหรับหัวข้อ, เนื้อหา และฟอนต์แสดงผลสไตล์วินเทจ
        // ตรวจสอบให้แน่ใจว่าฟอนต์เหล่านี้ถูก import หรือมีอยู่ในระบบของผู้ใช้
        heading: ['"Roboto Condensed"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
        "vintage-display": ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
