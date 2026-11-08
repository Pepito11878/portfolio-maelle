interface CardProps {
  title: string;
  content: string[];
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="w-80 h-100 font-quicksand group">
      <div className="relative w-full h-full text-center transition-transform duration-300 group-hover:-translate-y-2">
        <div className="absolute inset-0 flex flex-col w-full h-full bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-green" />

          <div className="pt-4 pb-6 border-b border-slate-100">
            <h3 className="text-2xl font-audiowide font-bold text-slate-800 tracking-wide">
              {title}
            </h3>
          </div>

          <ul className="flex-1 text-left mt-6 space-y-3 overflow-y-auto pr-1">
            {content.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-slate-600 text-sm font-medium leading-relaxed"
              >
                <span className="inline-block w-2 h-2 mt-1.5 mr-3 rounded-full bg-green shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
