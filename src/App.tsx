import { useState, useEffect } from "react";

import { NAV } from "./Data";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/sections/About";
import Stack from "./components/sections/Stack";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const handleScroll = (): void => {
      const ids = NAV.map((n) => n.id);
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.75) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#0a0a0a",
        color: "#e8e8e8",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        * { box-sizing: border-box; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-0 min-h-screen">
        <Sidebar active={activeSection} />

        {/* Divider */}
        <div
          className="hidden lg:block w-px mx-8 self-stretch"
          style={{ background: "#1e1e1e" }}
        />

        {/* Main */}
        <main className="flex-1 py-16 lg:py-20 flex flex-col gap-20">
          <About />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
