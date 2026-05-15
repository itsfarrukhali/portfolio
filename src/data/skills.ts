// data/skills.ts
export interface Skill {
  name: string;
  icon: string; // Slug that matches the iconMap in TechIcon.tsx
  color?: string; // Optional Tailwind color class (not mandatory)
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "ShadCN UI", icon: "shadcnui" },
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: "zustand" },
      { name: "Formik", icon: "formik" },
      { name: "React Hook Form", icon: "reacthookform" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "REST API Design", icon: "postman" },
      { name: "Socket.io", icon: "socketdotio" },
      { name: "JWT Authentication", icon: "jsonwebtokens" },
      { name: "Passport.js", icon: "passport" },
      { name: "Multer", icon: "multer" }, // fallback
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mongoose", icon: "mongoose" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "Netlify", icon: "netlify" },
      { name: "Postman", icon: "postman" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Stripe", icon: "stripe" },
      { name: "Chart.js", icon: "chartdotjs" },
      { name: "PDFKit", icon: "pdfkit" }, // fallback
    ],
  },
  {
    title: "Practices",
    items: [
      { name: "Agile / Scrum", icon: "scrumalliance" },
      { name: "Responsive Design", icon: "html5" },
      { name: "Debugging", icon: "bugcrowd" },
      { name: "API Integration", icon: "postman" },
      { name: "Role-Based Access Control", icon: "auth0" },
    ],
  },
  {
    title: "IT & Systems",
    items: [
      { name: "Windows Server Administration", icon: "windows" },
      { name: "Active Directory (AD)", icon: "microsoftazure" },
      { name: "Group Policy", icon: "microsoft" },
      { name: "Hardware Troubleshooting", icon: "ifixit" },
      { name: "Network Support", icon: "cisco" },
      { name: "System Backup & Recovery", icon: "veeam" },
      { name: "LAN/Wi-Fi Configuration", icon: "ubiquiti" },
      { name: "Vendor Coordination", icon: "handshake" },
    ],
  },
];
