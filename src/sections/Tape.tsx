import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performantes",
  "Accesibles",
  "Seguras",
  "Interactivas",
  "Escalables",
  "Faciles de usar",
  "Mantenibles",
  "Confiables",
  "Confiables",
  "Responsivas",
];

export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 -translate-x-1/2 animate-move-left [animationDuration:30s] will-change-transform">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 font-extrabold uppercase text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
