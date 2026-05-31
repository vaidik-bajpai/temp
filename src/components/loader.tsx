import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loader = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.4,
          ease: "power4.inOut",
        },
        onComplete,
      });

      tl.from(
        ".loader-mark",
        {
          opacity: 0,
          y: -72,
          filter: "blur(12px)",
          duration: 0.55,
        },
        0,
      );
      tl.to(
        ".loader-mark",
        {
          opacity: 0,
          y: 34,
          filter: "blur(8px)",
          duration: 0.42,
        },
        0.72,
      );
      tl.to(".loader-left", { xPercent: -120 }, 1);
      tl.to(".loader-right", { xPercent: 120 }, 1);
    },
    { scope: loader },
  );

  return (
    <div
      ref={loader}
      className="loader loader-surface pointer-events-none fixed inset-0 z-[9999]"
    >
      <div
        className="loader-left loader-panel-left absolute inset-0 [clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]"
        aria-hidden="true"
      />

      <div className="loader-right loader-panel-right absolute inset-0 [clip-path:polygon(58%_0,100%_0,100%_100%,42%_100%)]">
        <div
          className="loader-mark absolute bottom-[clamp(1.5rem,7vh,5rem)] right-[clamp(1.25rem,5vw,4rem)] z-[8] grid origin-bottom-right text-right text-[clamp(2.25rem,6.8vw,7rem)] font-black uppercase leading-[0.78] tracking-[0] text-[#f8f8f2]"
          aria-label="Gaurangi"
        >
          <span aria-hidden="true">Gaurangi</span>
          <strong>Gaurangi</strong>
          <span aria-hidden="true">Gaurangi</span>
        </div>
      </div>
    </div>
  );
}
