import type { ReactNode } from "react";
import { IconGithub, IconLinkedin, IconMail, IconPin } from "../ui/Icons";
import { NAV } from "../../Data";

interface SidebarProps {
  active: string;
}

export default function Sidebar({ active }: SidebarProps) {
  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks: { icon: ReactNode; href: string; label: string }[] = [
    {
      icon: <IconGithub />,
      href: "https://github.com/LouisBEDU",
      label: "GitHub",
    },
    {
      icon: <IconLinkedin />,
      href: "https://www.linkedin.com/in/bedulouis/",
      label: "LinkedIn",
    },
    {
      icon: <IconMail className="w-5 h-5" />,
      href: "mailto:louis.bedu.pro@gmail.com",
      label: "Email",
    },
  ];

  return (
    <aside className="lg:w-[320px] shrink-0 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto py-16 lg:py-20 flex flex-col gap-10">
      {/* Identity */}
      <div>
        <div className="relative inline-block mb-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-black font-black text-xl select-none"
            style={{ background: "#00ff87", fontFamily: "'Syne', sans-serif" }}
          >
            LB
          </div>
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0a0a]" />
        </div>
        <h1
          className="text-3xl font-extrabold text-white leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Louis BEDU
          <span className="text-emerald-400 animate-pulse">_</span>
        </h1>
        <p className="text-gray-500 font-mono text-sm mt-1">
          Développeur Full Stack
        </p>
        <p className="text-xs text-gray-600 font-mono mt-3 leading-relaxed">
          1+ ans d'expérience • Spring Boot • React • DevOps
        </p>
      </div>

      {/* Nav */}
      <nav className="hidden lg:flex flex-col gap-0.5">
        {NAV.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="group flex items-center gap-3 text-xs font-mono py-1.5 text-left transition-colors"
              style={{ color: isActive ? "#00ff87" : "#555" }}
            >
              <span
                className="h-px transition-all duration-300"
                style={{
                  width: isActive ? "2rem" : "1.5rem",
                  background: isActive ? "#00ff87" : "#555",
                }}
              />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Info */}
      <div className="flex flex-col gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-gray-500">
          <IconPin />
          Lille, France
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <IconMail />
          louis.bedu.pro@gmail.com
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          Disponible
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center gap-4">
        {socialLinks.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-gray-600 hover:text-white transition-colors"
            target="_blank"
          >
            {icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
