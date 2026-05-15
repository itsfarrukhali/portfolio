// components/shared/TechIcon.tsx
"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiShadcnui,
  SiRedux,
  SiReacthookform,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPassport,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiNetlify,
  SiCloudinary,
  SiStripe,
  SiChartdotjs,
  SiScrumalliance,
  SiHtml5,
  SiBugcrowd,
  SiAuth0,
  SiIfixit,
  SiCisco,
  SiVeeam,
  SiUbiquiti,
  SiHandshake,
  SiX,
  // Missing icons fallback – use a custom SVG component
} from "@icons-pack/react-simple-icons";

// Custom icons for missing brands (Zustand, Formik, Multer, PDFKit)
function SiZustand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 2h20v20H2V2zm10 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" />
    </svg>
  );
}

function SiFormik({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 4h16v2H4V4zm0 6h10v2H4v-2zm0 6h12v2H4v-2z" />
    </svg>
  );
}

function SiMulter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2z" />
    </svg>
  );
}

function SiPdfkit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 2h12l4 4v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function SiWindows({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 3l9-1.5v9H2V3zm11-1.8L22 0v10h-9V1.2zM2 12h9v9.5L2 20V12zm11 0h9v10l-9-1.5V12z" />
    </svg>
  );
}

function SiMicrosoftazure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L4 18h5l2-3.5L15 22l5-4L13 2z" />
    </svg>
  );
}

function SiMicrosoft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 2h9v9H2V2zm11 0h9v9h-9V2zM2 13h9v9H2v-9zm11 0h9v9h-9v-9z" />
    </svg>
  );
}

function SiLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-6.9c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.8-2.65 3.63V24h-5V8z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  shadcnui: SiShadcnui,
  redux: SiRedux,
  zustand: SiZustand,
  formik: SiFormik,
  reacthookform: SiReacthookform,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  postman: SiPostman,
  socketdotio: SiSocketdotio,
  jsonwebtokens: SiJsonwebtokens,
  passport: SiPassport,
  multer: SiMulter,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  postgresql: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  render: SiRender,
  netlify: SiNetlify,
  cloudinary: SiCloudinary,
  stripe: SiStripe,
  chartdotjs: SiChartdotjs,
  pdfkit: SiPdfkit,
  scrumalliance: SiScrumalliance,
  html5: SiHtml5,
  bugcrowd: SiBugcrowd,
  auth0: SiAuth0,
  windows: SiWindows,
  microsoftazure: SiMicrosoftazure,
  microsoft: SiMicrosoft,
  ifixit: SiIfixit,
  cisco: SiCisco,
  veeam: SiVeeam,
  ubiquiti: SiUbiquiti,
  handshake: SiHandshake,
  x: SiX,
  linkedin: SiLinkedin,
};

interface TechIconProps {
  name: string; // slug from your skill data
  className?: string;
}

export default function TechIcon({ name, className }: TechIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback for truly unknown slugs – a generic circle
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  return <IconComponent className={className} />;
}
