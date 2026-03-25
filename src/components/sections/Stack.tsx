import { useState } from "react";
import { FadeSection, SectionHeading } from "../../SubComponents";
import { STACK } from "../../Data";

export default function Stack() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <FadeSection>
      <section id="stack">
        <SectionHeading number="02" label="Stack technique" />
        <div className="space-y-6">
          {Object.entries(STACK).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs font-mono text-gray-600 mb-3 uppercase tracking-widest">
                {cat}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered(null)}
                    className="border text-xs font-mono px-3 py-1.5 rounded-md transition-all duration-200 cursor-default"
                    style={{
                      borderColor: hovered === item ? "#00ff87" : "#1e1e1e",
                      color: hovered === item ? "#00ff87" : "#888",
                      background:
                        hovered === item
                          ? "rgba(0,255,135,0.06)"
                          : "transparent",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeSection>
  );
}
