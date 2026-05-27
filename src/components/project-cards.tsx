import { useGSAP } from "@gsap/react";
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
  const outlineRef = useRef<HTMLSpanElement>(null)

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
        }
    );
  }
  return (
    <article
      className="
        group
        relative
        before:content-['']
        before:absolute
        before:inset-0
        before:background:
        before:opacity:0.34
        before:bg-[repeating-linear-gradient(-12deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_14px)]

        overflow-visible
        relative
        min-h-[360px]
        bg-[#141414]
        p-[1.25rem]
        hover:bg-[#1b1b1b]
      "
      onMouseEnter={onMouseEnter}
      key={title}
    >
      <div className="mb-12 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
        <span>{code}</span>
        <span>{year}</span>
      </div>
      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-lime-300">
        {type}
      </p>
      <h3 className="text-3xl font-black uppercase leading-none text-zinc-50 group-hover:[text-shadow:3px_0_#ff399c,-3px_0_#92fffa]">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-6 text-zinc-400">{description}</p>

      <span className="corner-frame-b"/>
      <span className="corner-frame-a"/>
      <span className="
        pointer-events-none absolute -top-2 -bottom-2 -left-2 -right-2
        border-1 border-[#d9ff75]
        opacity-0
      " ref={outlineRef}></span>
    </article>
  );
};

export default ProjectCard;
