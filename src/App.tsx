import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImg from "./assets/hero.png";
import "./App.css";
import Projects from "./pages/projects";
import Loader from "./components/loader";

const skills = [
  "Model training",
  "MLOps",
  "Vector search",
  "Python",
  "PyTorch",
  "Evaluation",
  "Data pipelines",
  "LLM systems",
];

const experience = [
  {
    period: "2024 - Present",
    role: "Machine Learning Engineer",
    studio: "Placeholder AI Lab",
    summary:
      "Placeholder description for production ML systems, model evaluation, retrieval workflows, and deployment pipelines.",
  },
  {
    period: "2021 - 2024",
    role: "Applied ML Developer",
    studio: "Placeholder Data Group",
    summary:
      "Placeholder description for experimentation, feature stores, inference services, and analytics-backed model iteration.",
  },
  {
    period: "2019 - 2021",
    role: "Data Science Intern",
    studio: "Placeholder Research Team",
    summary:
      "Placeholder description for notebooks, baseline models, dataset audits, and research summaries for stakeholder teams.",
  },
];

const services = [
  "Model prototyping",
  "Inference APIs",
  "RAG systems",
  "Dataset audits",
  "Evaluation suites",
  "MLOps workflows",
];

const recognitions = [
  { value: "24+", label: "Placeholder experiments" },
  { value: "11", label: "Placeholder pipelines" },
  { value: "06", label: "Placeholder deployments" },
];

const modelSignals = [
  { label: "Latency", value: "42ms" },
  { label: "F1 score", value: "0.91" },
  { label: "Drift", value: "0.08" },
  { label: "Recall@5", value: "87%" },
];

function App() {
  const root = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));

    return () => window.cancelAnimationFrame(frame);
  }, []);

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
      <Loader />
      <div ref={cursor} className="cursor-halo" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-zinc-100/10 bg-[#111111]/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-xs uppercase tracking-[0.28em] text-zinc-300 md:px-8">
          <a href="#top" className="font-semibold text-zinc-50">
            G.T.
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#studio">Systems</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="mailto:hello@example.com" className="nav-chip">
            ML Engineer
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-shell relative grid min-h-screen items-center overflow-hidden px-5 py-24 md:px-8">
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div className="relative z-10">
              <p className="reveal mb-5 max-w-xl text-sm uppercase tracking-[0.36em] text-lime-300">
                Machine learning engineer
              </p>
              <h1 className="reveal glitch-title text-[clamp(3.3rem,11vw,10.6rem)] font-black uppercase leading-[0.78] text-zinc-50">
                <span className="glitch-slice" aria-hidden="true">
                  Gaurangi Tripathi
                </span>
                <span>Gaurangi Tripathi</span>
              </h1>
              <p className="reveal mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
                Placeholder introduction for an ML engineer focused on model
                systems, inference reliability, data pipelines, and measured
                product impact.
              </p>
              <div className="reveal hero-meta">
                <span>Python / PyTorch / SQL</span>
                <span>Batch and realtime inference</span>
                <span>Placeholder portfolio 2026</span>
              </div>
            </div>

            <div className="reveal hero-media neural-display relative z-10">
              <img
                src={heroImg}
                alt="Abstract neural network visual"
                className="hero-image"
              />
              <div className="media-caption">
                <span>Model console</span>
                <strong>
                  Training loops / Evaluation / Deployment telemetry
                </strong>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section
          id="studio"
          className="systems-band grid min-h-screen items-center px-5 py-28 md:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="reveal section-kicker">Systems</p>
              <h2 className="reveal mt-3 text-5xl font-black uppercase leading-none md:text-7xl">
                Models with measurable behavior
              </h2>
            </div>
            <div className="reveal space-y-8">
              <p className="max-w-3xl text-2xl font-semibold leading-snug text-zinc-100 md:text-4xl">
                Placeholder paragraph about turning uncertain datasets into
                monitored ML products with clear baselines, traceable decisions,
                and production-ready feedback loops.
              </p>
              <div className="skill-strip">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="signal-grid">
                {modelSignals.map((signal) => (
                  <div key={signal.label}>
                    <strong>{signal.value}</strong>
                    <span>{signal.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="experience-band border-y border-zinc-100/10"
        >
          <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-5 py-24 md:grid-cols-[0.72fr_1.28fr] md:px-8">
            <div>
              <p className="reveal section-kicker">Experience</p>
              <h2 className="reveal mt-3 text-5xl font-black uppercase leading-none text-zinc-50 md:text-7xl">
                Applied ML timeline
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

        <section id="services" className="services-band px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="reveal section-kicker">Capabilities</p>
                <h2 className="reveal mt-3 text-5xl font-black uppercase leading-none md:text-7xl">
                  What I ship
                </h2>
              </div>
              <p className="reveal max-w-2xl text-base leading-7 text-zinc-300">
                Placeholder overview for ML engineering work across data
                preparation, training, evaluation, deployment, monitoring, and
                stakeholder-ready documentation.
              </p>
            </div>

            <div className="service-grid reveal">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="mx-auto grid min-h-[72vh] max-w-7xl items-stretch gap-px px-5 py-24 md:grid-cols-3 md:px-8">
            {recognitions.map((item) => (
              <div className="reveal stat-cell" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-band">
          <div className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center gap-8 px-5 py-24 md:px-8">
            <p className="reveal section-kicker">Contact</p>
            <a className="reveal contact-link" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <div className="reveal flex flex-wrap gap-3 text-xs uppercase tracking-[0.26em] text-zinc-500">
              <span>LinkedIn</span>
              <span>GitHub</span>
              <span>Kaggle</span>
              <span>Research notes</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
