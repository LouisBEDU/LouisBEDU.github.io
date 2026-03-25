import { type MouseEvent } from "react";
import { PROJECTS } from "../../Data";
import { colorMap } from "../../Helpers";
import { FadeSection, SectionHeading } from "../../SubComponents";
import { IconExternal, IconGithub } from "../ui/Icons";

export default function Projects() {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.borderColor = "#333";
  };
  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.borderColor = "#1e1e1e";
  };

  return (
    <FadeSection>
      <section id="projects">
        <SectionHeading number="04" label="Projets" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => {
            const c = colorMap[project.color];
            return (
              <div
                key={i}
                className="rounded-xl p-5 transition-all duration-200 group cursor-pointer"
                style={{ background: "#111", border: "1px solid #1e1e1e" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-base ${c.bg} ${c.text}`}
                    style={{
                      border: "1px solid",
                      borderColor: "currentColor",
                      opacity: 1,
                    }}
                  >
                    {project.emoji}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label="GitHub"
                        className="text-gray-600 hover:text-white transition-colors"
                        target="_blank"
                      >
                        <IconGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        aria-label="Live"
                        className="text-gray-600 hover:text-white transition-colors"
                        target="_blank"
                      >
                        <IconExternal />
                      </a>
                    )}
                  </div>
                </div>
                <h3
                  className="font-bold text-base mb-2 transition-colors group-hover:text-emerald-400 text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-5 mb-4 font-mono">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-500 px-2 py-0.5 rounded"
                      style={{ border: "1px solid #1e1e1e" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </FadeSection>
  );
}
