import { useEffect, useState } from "react";
import { FadeSection, SectionHeading } from "../../SubComponents";

export default function About() {
  const [tick, setTick] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => setTick((v) => !v), 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <FadeSection>
      <section id="about">
        <SectionHeading number="01" label="À propos" />
        <div className="space-y-4 text-sm leading-7 text-gray-400 font-mono">
          <p>
            Développeur{" "}
            <span className="text-white font-medium">Full Stack passionné</span>{" "}
            avec plus de 1 ans d'expérience, je construis des applications web
            robustes, scalables et esthétiques. J'ai commencé à coder à 14 ans,
            poussé par une curiosité insatiable.
          </p>
          <p>
            Spécialisé dans l'écosystème{" "}
            <span className="text-emerald-400 font-medium">
              React / Next.js / Spring Boot / PostgreSQL
            </span>
            , j'interviens aussi bien côté front-end que back-end — APIs REST,
            microservices & bases de données.
          </p>
          <p>
            Je crois que le bon code est celui qui{" "}
            <span className="text-white">résout de vrais problèmes</span> et
            délecte ses utilisateurs.
          </p>
        </div>

        {/* Terminal */}
        <div
          className="mt-8 rounded-xl p-5 font-mono text-xs"
          style={{ background: "#111", border: "1px solid #1e1e1e" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-gray-600 text-xs">~/louis-bedu</span>
          </div>
          <p className="text-gray-500">
            <span className="text-emerald-400">❯</span> whoami
          </p>
          <p className="text-gray-400 mt-1">louis bedu — fullstack developer</p>
          <p className="text-gray-500 mt-3">
            <span className="text-emerald-400">❯</span> cat interests.txt
          </p>
          <p className="text-gray-400 mt-1">
            {`["Vidéo Games", "DevOps", "IA", "Side Projects"]`}
          </p>
          <p className="text-gray-500 mt-3">
            <span className="text-emerald-400">❯</span> echo $STATUS
          </p>
          <p className="text-emerald-400 mt-1">
            🟢 open to work{tick ? "_" : "\u00A0"}
          </p>
        </div>
      </section>
    </FadeSection>
  );
}
