export default function About() {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col justify-center items-start transition-all duration-300 hover:shadow-2xl">
      <div className="absolute top-0 left-0 w-2 h-full bg-green" />

      <div className="flex items-center space-x-3 mb-4 pl-2">
        <span className="inline-block p-2 rounded-xl bg-green/20 text-green">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <h3 className="text-2xl font-bold text-slate-800 font-audiowide tracking-wide">
          À PROPOS
        </h3>
      </div>

      <p className="text-slate-600 leading-relaxed font-quicksand text-base pl-2">
        Je m'appelle{" "}
        <span className="font-semibold text-slate-800">Maëlle</span> et je me
        forme actuellement au développement full stack à{" "}
        <span className="font-semibold text-emerald-600">ADA Tech School</span>.
        Ce portfolio regroupe les projets et exercices pratiques que j'ai
        réalisés dans le cadre de ma formation. Il met en lumière mon évolution,
        mes apprentissages et mes compétences techniques.
      </p>
    </div>
  );
}
