import { useState, type JSX } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

export default function Portfolio(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="portfolio" className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide text-slate-800 text-center mb-12 tracking-wide">
          Mes réalisations
        </h2>

        {/* 2 colonnes au lieu de 3 pour agrandir naturellement chaque carte */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((p: Project, index: number) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={p.title || index}
                onClick={() => handleClick(index)}
                /* Format 16:10 pour avoir une belle capture bien grande et aérée */
                className="group relative w-full aspect-16/10 min-h-80 rounded-2xl overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200/80"
              >
                {/* Image de fond avec zoom subtil */}
                {p.img && (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Dégradé de fond au repos */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity duration-300" />

                {/* Titre au repos */}
                <div className={`absolute bottom-6 left-6 right-6 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"}`}>
                  <h3 className="text-2xl font-audiowide text-white drop-shadow-md mb-1">
                    {p.title}
                  </h3>
                  <span className="text-xs text-slate-300 font-mono">{p.date}</span>
                </div>

                {/* Overlay au survol / clic */}
                <div
                  className={`
                    absolute inset-0 bg-slate-900/90 backdrop-blur-md p-8 flex flex-col justify-between text-white
                    transition-all duration-300 ease-in-out
                    ${isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}
                    md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0
                  `}
                >
                  {/* Haut de l'overlay */}
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold font-audiowide text-emerald-400">
                        {p.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono pt-1">{p.date}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 font-quicksand leading-relaxed line-clamp-4">
                      {p.description}
                    </p>
                  </div>

                  {/* Bas de l'overlay */}
                  <div className="space-y-4 pt-4">
                    {/* Badges tech */}
                    <div className="flex flex-wrap gap-2">
                      {p.tech.split(",").map((techItem, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        >
                          {techItem.trim()}
                        </span>
                      ))}
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code GitHub
                      </a>

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-center py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Voir la Démo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}