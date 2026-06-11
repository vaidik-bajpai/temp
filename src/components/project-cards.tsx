import { useRef } from "react";
import type { MouseEvent } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

interface ProjectCardInterface {
  title: string;
  code: string;
  year: string;
  type: string;
  description: string;
  tech?: string[];
  highlights?: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  code,
  year,
  type,
  description,
  tech = [],
  highlights = [],
  link,
}: ProjectCardInterface) => {
  const outlineRef = useRef<HTMLSpanElement>(null);
  const cursorArrowRef = useRef<HTMLSpanElement>(null);

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!cursorArrowRef.current) {
      return;
    }

    gsap.to(cursorArrowRef.current, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.2,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const onMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
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

    if (!cursorArrowRef.current) {
      return;
    }

    gsap.set(cursorArrowRef.current, {
      x: event.clientX,
      y: event.clientY,
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 1,
    });

    gsap.to(cursorArrowRef.current, {
      scale: 1,
      duration: 0.2,
      overwrite: "auto",
    });

    gsap.to(event.currentTarget, {
      scale: 0.95,
      duration: 0.3,
      overwrite: "auto",
    });
  };

  const onMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!cursorArrowRef.current) {
      return;
    }

    gsap.to(cursorArrowRef.current, {
      scale: 0,
      autoAlpha: 0,
      duration: 0.2,
      overwrite: "auto",
    });

    gsap.to(event.currentTarget, {
      scale: 1,
      duration: 0.3,
      overwrite: "auto",
    });
  };

  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <span
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-20 w-20 items-center justify-center rounded-full bg-zinc-950 text-5xl font-extralight text-white"
            ref={cursorArrowRef}
            style={{ visibility: "hidden" }}
          >
            →
          </span>,
          document.body,
        )}

      <a
        className="project-card group relative overflow-visible p-5 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        href={link}
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
      </a>
    </>
  );
};

export default ProjectCard;
