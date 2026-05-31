import { useRef } from "react";
import gsap from "gsap";

interface ProjectCardInterface {
  title: string;
  code: string;
  year: string;
  type: string;
  description: string;
  tech?: string[];
  highlights?: string[];
}

const ProjectCard = ({
  title,
  code,
  year,
  type,
  description,
  tech = [],
  highlights = [],
}: ProjectCardInterface) => {
  const outlineRef = useRef<HTMLSpanElement>(null);

  const onMouseEnter = () => {
    gsap.fromTo(
      outlineRef.current,
      {
        opacity: 0.5,
        scale: 1.05,
      },
      {
        opacity: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  };
  return (
    <article
      className="project-card group relative overflow-visible p-5"
      onMouseEnter={onMouseEnter}
    >
      <div className="mb-12 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
        <span>{code}</span>
        <span>{year}</span>
      </div>
      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-lime-300">
        {type}
      </p>
      <h3 className="max-w-full text-[clamp(1.7rem,2.7vw,3rem)] font-black uppercase leading-[0.94] text-zinc-50 group-hover:[text-shadow:3px_0_#ff399c,-3px_0_#92fffa]">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
        {description}
      </p>

      {tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              className="border border-zinc-100/10 bg-zinc-100/5 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-zinc-300"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {highlights.length > 0 && (
        <ul className="mt-6 space-y-2 text-sm leading-5 text-zinc-300">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <span className="corner-frame-b" />
      <span className="corner-frame-a" />
      <span
        className="
        outline
      "
        ref={outlineRef}
      ></span>
    </article>
  );
};

export default ProjectCard;
