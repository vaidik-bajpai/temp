import { useRef } from "react";
import gsap from "gsap";

interface ProjectCardInterface {
  title: string;
  code: string;
  year: string;
  type: string;
  description: string;
}

const ProjectCard = ({
  title,
  code,
  year,
  type,
  description,
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
