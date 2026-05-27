import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImg from "./assets/hero.png";
import "./App.css";
import Projects from "./pages/projects";

const skills = [
  "Art direction",
  "React",
  "GSAP",
  "Design systems",
  "3D web",
  "Visual identity",
];

const experience = [
  {
    period: "2024 - Present",
    role: "Independent Creative Developer",
    studio: "Nova Vale Studio",
    summary:
      "Partnering with founders and design teams to ship expressive websites, launch systems, and motion-led prototypes.",
  },
  {
    period: "2021 - 2024",
    role: "Senior Frontend Designer",
    studio: "Obsidian Works",
    summary:
      "Led interface design and frontend production for editorial commerce, music platforms, and cultural campaigns.",
  },
  {
    period: "2019 - 2021",
    role: "Interactive Designer",
    studio: "Field Unit",
    summary:
      "Built brand sites, WebGL experiments, and visual systems with a focus on typography, motion, and performance.",
  },
];

const services = [
  "Portfolio systems",
  "Campaign microsites",
  "Motion direction",
  "Design engineering",
  "Launch identities",
  "Prototype labs",
];

const recognitions = [
  { value: "38+", label: "Shipped launches" },
  { value: "11", label: "Identity systems" },
  { value: "06", label: "Award mentions" },
];

function App() {
  const root = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".reveal", { y: 28, opacity: 0, filter: "blur(10px)" });
      gsap.to(".reveal", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.to(".scanline", {
        backgroundPositionY: "80px",
        duration: 1.2,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".glitch-slice", {
        x: () => gsap.utils.random(-14, 14),
        skewX: () => gsap.utils.random(-10, 10),
        duration: 0.09,
        repeat: -1,
        repeatDelay: 1.6,
        yoyo: true,
      });
    },
    { scope: root },
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!cursor.current) return;
    gsap.to(cursor.current, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={root}
      className="min-h-screen overflow-hidden bg-[#111111] text-zinc-100"
      onPointerMove={handlePointerMove}
    >
      <div ref={cursor} className="cursor-halo" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-zinc-100/10 bg-[#111111]/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-xs uppercase tracking-[0.28em] text-zinc-300 md:px-8">
          <a href="#top" className="font-semibold text-zinc-50">
            N.V.
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#studio">Studio</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="mailto:hello@example.com" className="nav-chip">
            Open for work
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-shell relative mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-5 pb-10 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-14">
          <div className="relative z-10">
            <p className="reveal mb-5 max-w-xl text-sm uppercase tracking-[0.36em] text-lime-300">
              Independent creative developer
            </p>
            <h1 className="reveal glitch-title text-[clamp(3.3rem,11vw,10.6rem)] font-black uppercase leading-[0.78] text-zinc-50">
              <span className="glitch-slice" aria-hidden="true">
                Nova Vale
              </span>
              <span>Nova Vale</span>
            </h1>
            <p className="reveal mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              I build tactile digital systems for culture, product, and
              commerce, where precise interfaces meet grain, distortion, and
              motion with intent.
            </p>
          </div>

          <div className="reveal hero-media relative z-10">
            <img
              src={heroImg}
              alt="Abstract portfolio avatar"
              className="hero-image"
            />
            <div className="media-caption">
              <span>Selected output</span>
              <strong>
                Visual systems / Web motion / Interactive direction
              </strong>
            </div>
          </div>

          <div className="reveal hero-meta">
            <span>Based in New York</span>
            <span>Available remotely</span>
            <span>2026 reel loading</span>
          </div>
        </section>

        <Projects />

        <section
          id="studio"
          className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8"
        >
          <div>
            <p className="reveal section-kicker">Practice</p>
            <h2 className="reveal mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
              Noise with control
            </h2>
          </div>
          <div className="reveal space-y-8">
            <p className="max-w-3xl text-2xl font-semibold leading-snug text-zinc-100">
              The work sits between polished systems and raw digital texture:
              structured enough to ship, expressive enough to be remembered.
            </p>
            <div className="skill-strip">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="experience-band border-y border-zinc-100/10"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.72fr_1.28fr] md:px-8">
            <div>
              <p className="reveal section-kicker">Experience</p>
              <h2 className="reveal mt-3 text-4xl font-black uppercase leading-none text-zinc-50 md:text-6xl">
                Timeline
              </h2>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article
                  className="reveal experience-item"
                  key={`${item.role}-${item.period}`}
                >
                  <p className="experience-period">{item.period}</p>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-studio">{item.studio}</p>
                    <p className="mt-4 text-sm leading-6 text-zinc-400">
                      {item.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="reveal section-kicker">Services</p>
              <h2 className="reveal mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
                What I build
              </h2>
            </div>
            <p className="reveal max-w-2xl text-sm leading-6 text-zinc-400">
              Focused engagements for teams that need a distinct visual
              language, a fast production path, and enough system thinking to
              keep the work usable after launch.
            </p>
          </div>

          <div className="service-grid reveal">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>

        <section className="stats-band">
          <div className="mx-auto grid max-w-7xl gap-px px-5 py-20 md:grid-cols-3 md:px-8">
            {recognitions.map((item) => (
              <div className="reveal stat-cell" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-band">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:px-8">
            <p className="reveal section-kicker">Contact</p>
            <a className="reveal contact-link" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <div className="reveal flex flex-wrap gap-3 text-xs uppercase tracking-[0.26em] text-zinc-500">
              <span>Instagram</span>
              <span>Dribbble</span>
              <span>GitHub</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
