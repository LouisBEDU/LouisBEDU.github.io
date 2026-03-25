import { type MouseEvent } from "react";
import { FadeSection, SectionHeading } from "../../SubComponents";
import { IconLinkedin, IconMail } from "../ui/Icons";

export default function Contact() {
  const handleEmailEnter = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.currentTarget.style.background = "#00cc6a";
  };
  const handleEmailLeave = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.currentTarget.style.background = "#00ff87";
  };
  const handleLinkedinEnter = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.currentTarget.style.borderColor = "#333";
  };
  const handleLinkedinLeave = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.currentTarget.style.borderColor = "#1e1e1e";
  };

  return (
    <FadeSection>
      <section id="contact">
        <SectionHeading number="05" label="Contact" />
        <div
          className="rounded-xl p-8"
          style={{ background: "#111", border: "1px solid #1e1e1e" }}
        >
          <p className="text-gray-400 text-sm leading-7 mb-6 font-mono">
            Vous avez un projet en tête, une mission freelance ou simplement
            envie d'échanger ? Je suis disponible et réponds rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:louis.bedu.pro@gmail.com"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              style={{
                background: "#00ff87",
                color: "#0a0a0a",
                fontFamily: "'Syne', sans-serif",
              }}
              onMouseEnter={handleEmailEnter}
              onMouseLeave={handleEmailLeave}
            >
              <IconMail className="w-4 h-4" />
              M'écrire un email
            </a>
            <a
              href="https://www.linkedin.com/in/bedulouis/"
              className="inline-flex items-center justify-center gap-2 font-mono text-sm px-6 py-3 rounded-lg transition-colors text-gray-400 hover:text-white"
              style={{ border: "1px solid #1e1e1e" }}
              onMouseEnter={handleLinkedinEnter}
              onMouseLeave={handleLinkedinLeave}
              target="_blank"
            >
              <IconLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
        <div
          className="mt-12 pt-6 flex items-center justify-between"
          style={{ borderTop: "1px solid #1e1e1e" }}
        >
          <p className="text-gray-600 text-xs font-mono">© 2026 Louis BEDU</p>
        </div>
      </section>
    </FadeSection>
  );
}
