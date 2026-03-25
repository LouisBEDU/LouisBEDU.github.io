import { type MouseEvent } from "react";
import { FadeSection, SectionHeading } from "../../SubComponents";
import { EDUCATION } from "../../Data";

export default function Education() {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.borderColor = "#333";
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.borderColor = "#1e1e1e";
  };

  return (
    <FadeSection>
      <section id="education">
        <SectionHeading number="03" label="Formation" />
        <div className="relative flex flex-col">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/5 hidden sm:block" />

          {EDUCATION.map((edu, i) => (
            <div key={i} className="sm:pl-10 relative pb-8 last:pb-0">
              <span
                className="hidden sm:block absolute left-0 top-3 w-3.5 h-3.5 rounded-full border-2"
                style={{
                  background: edu.active ? "#00ff87" : "#1e1e1e",
                  borderColor: "#0a0a0a",
                  boxShadow: "0 0 0 4px #0a0a0a",
                }}
              />

              <div
                className="rounded-xl p-5 transition-colors"
                style={{ background: "#111", border: "1px solid #1e1e1e" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className="font-bold text-white text-base"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {edu.school}
                    </h3>

                    <p
                      className="text-xs font-mono mt-0.5"
                      style={{ color: edu.active ? "#00ff87" : "#888" }}
                    >
                      {edu.degree}
                    </p>
                  </div>

                  <span className="text-gray-600 text-xs font-mono shrink-0">
                    {edu.period}
                  </span>
                </div>

                <ul className="space-y-1.5 text-sm text-gray-400 font-mono">
                  {edu.description.map((item, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-emerald-400 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {edu.tags.map((tag) => (
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
            </div>
          ))}
        </div>
      </section>
    </FadeSection>
  );
}
