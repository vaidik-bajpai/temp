import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Projects from "./pages/projects";
import Loader from "./components/loader";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  "Python",
  "C++",
  "SQL",
  "Power BI",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "OpenCV",
  "TensorFlow",
  "Keras",
  "Flask",
  "Streamlit",
  "Cryptography",
  "Git",
];

const experience = [
  {
    period: "May 2025 - July 2025",
    role: "Machine Learning Intern",
    studio: "AIQUANTUM SMART SOLUTIONS Pvt. Ltd.",
    summary:
      "I built machine learning and deep learning models in Python for image processing tasks, and developed a DDoS detection system using predictive modeling.",
  },
];

const services = [
  "ML classification",
  "Deep learning prototypes",
  "Image processing",
  "Threat detection APIs",
  "Data analytics",
  "Secure systems",
];

const recognitions = [
  {
    value: "94%",
    label: "DDoS detection accuracy",
    detail: "Random Forest and SVM benchmark on large traffic data.",
  },
  {
    value: "120K+",
    label: "Network records processed",
    detail: "Built the model around a large traffic corpus with repeatable evaluation.",
  },
  {
    value: "Top 10",
    label: "Hack on Hills 6.0",
    detail: "Selected from 250+ teams for an innovative project prototype.",
  },
];

const modelSignals = [
  { label: "DDoS accuracy", value: "94%" },
  { label: "Precision / recall", value: "90%+" },
  { label: "Emotion accuracy", value: "88%" },
  { label: "Threat exposure", value: "-70%" },
];

const education = [
  {
    period: "Oct 2022 - Ongoing",
    title: "B.Tech in Computer Science Engineering",
    institution: "Jaypee University of Engineering & Technology, Guna",
    detail: "Computer Science undergraduate focused on ML, data analytics, image processing, and software development.",
  },
  {
    period: "Aug 2020 - May 2021",
    title: "Class 12",
    institution: "Dr. Virendra Swarup Education Centre",
    detail: "Percentage: 86",
  },
  {
    period: "Aug 2018 - May 2019",
    title: "Class 10",
    institution: "Dr. Virendra Swarup Education Centre, Kanpur, U.P.",
    detail: "Percentage: 85",
  },
];

const credentials = [
  "Machine Learning Foundation: Explore ML Using Python - Infosys Springboard",
  "React JS and JavaScript Certification - AWS Community",
  "Hackathon Semi-Finalist, Hack on Hills 6.0: top 10 among 250+ teams",
];

const responsibilities = [
  {
    role: "Joint Secretary, Art and Event Club",
    period: "Aug 2024 - Present",
    summary:
      "Led, hosted, and managed flagship cultural programs including the annual fest and Dequinox.",
  },
  {
    role: "Coordinator, Literary Wing",
    period: "Aug 2023 - May 2024",
    summary:
      "Anchored college events and led content, hosting, and coordination for literary activities.",
  },
];

const heroTitle = "Gaurangi Tripathi";
const scrambleGlyphs = "01_<>[]{}#$%&/\\|+-*";

function App() {
  const root = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const heroPortrait = useRef<HTMLDivElement>(null);
  const scrambleTimer = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrambledTitle, setScrambledTitle] = useState(heroTitle);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));

    return () => {
      window.cancelAnimationFrame(frame);
      if (scrambleTimer.current) {
        window.clearInterval(scrambleTimer.current);
      }
    };
  }, []);

  useGSAP(
    () => {
      gsap.set(".reveal", { y: 34, opacity: 0, filter: "blur(12px)" });
      gsap.to(".hero-shell .reveal", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay: 2.05,
      });

      gsap.utils.toArray<HTMLElement>(".reveal:not(.hero-shell .reveal)").forEach(
        (element) => {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          });
        },
      );

      gsap.to(".hero-noise-orbit", {
        rotate: 8,
        yPercent: -6,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        ease: "none",
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

      gsap.to(".hero-copy", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-shell",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".hero-portrait-stage", {
        yPercent: 10,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-shell",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
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

  const handleHeroImageMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!heroPortrait.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(heroPortrait.current, {
      x: x * 92,
      y: y * 18,
      rotate: x * 2.2,
      duration: 0.75,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleHeroImageLeave = () => {
    if (!heroPortrait.current) return;

    gsap.to(heroPortrait.current, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 1,
      ease: "elastic.out(1, 0.58)",
      overwrite: true,
    });
  };

  const scrambleHeroTitle = () => {
    if (scrambleTimer.current) {
      window.clearInterval(scrambleTimer.current);
    }

    let frame = 0;
    const duration = 22;

      scrambleTimer.current = window.setInterval(() => {
      setScrambledTitle(
        heroTitle
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < frame / 1.6) return heroTitle[index];

            const glyphIndex = Math.floor(
              Math.random() * scrambleGlyphs.length,
            );
            return scrambleGlyphs[glyphIndex];
          })
          .join(""),
      );

      frame += 1;

      if (frame > duration) {
        if (scrambleTimer.current) {
          window.clearInterval(scrambleTimer.current);
          scrambleTimer.current = null;
        }
        setScrambledTitle(heroTitle);
      }
    }, 32);
  };

  return (
    <div
      ref={root}
      className="min-h-screen overflow-hidden bg-[#111111] text-zinc-100"
      onPointerMove={handlePointerMove}
    >
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div ref={cursor} className="cursor-halo" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-zinc-100/10 bg-[#111111]/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-xs uppercase tracking-[0.28em] text-zinc-300 md:px-8">
          <a href="#top" className="font-semibold text-zinc-50">
            Gaurangi
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#studio">Studio</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="mailto:hello@gaurangi.studio" className="nav-chip">
            ML Engineer
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-shell relative min-h-screen overflow-hidden px-5 pt-28 md:px-8">
          <div className="hero-noise-orbit" aria-hidden="true" />
          <div className="hero-bazil-layout relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col items-center text-center">
            <div className="hero-copy relative z-10">
              <p className="reveal mb-5 text-sm uppercase tracking-[0.36em] text-lime-300">
                I am a computer science undergraduate focused on machine learning,
                image processing, and secure systems
              </p>
              <h1
                className="reveal group glitch-title text-[clamp(4rem,13vw,12.5rem)] font-black uppercase leading-[0.78] text-zinc-50"
                onMouseEnter={scrambleHeroTitle}
              >
                <span className="glitch-slice" aria-hidden="true">
                  {scrambledTitle}
                </span>

                <span className="glitch-base">{scrambledTitle}</span>

              </h1>

              
            </div>

            

            <div className="reveal hero-portrait-stage">
              <div ref={heroPortrait} className="hero-portrait-magnet">
                <div
                  className="hero-portrait-hitbox"
                  onPointerMove={handleHeroImageMove}
                  onPointerLeave={handleHeroImageLeave}
                />
                <img
                  src="/guarangi.webp"
                  alt="Gaurangi Tripathi"
                  className="hero-portrait hero-portrait-main portrait-mask"
                />
                <img
                  src="/guarangi.webp"
                  alt=""
                  className="hero-portrait hero-portrait-glitch hero-portrait-glitch-a"
                  aria-hidden="true"
                />
                <img
                  src="/guarangi.webp"
                  alt=""
                  className="hero-portrait hero-portrait-glitch hero-portrait-glitch-b"
                  aria-hidden="true"
                />
                <span className="corner-frame-a"></span>
                <span className="corner-frame-b"></span>

                <div className="reveal hero-actions">
                  <a href="#work" className="hero-action hero-action-primary">
                    View work
                  </a>
                  <a
                    href="mailto:hello@gaurangi.studio"
                    className="hero-action hero-action-secondary"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
            <div className="reveal hero-caption">
              <span>I build models, evaluation loops, and deployment paths</span>
              <span>I work across image processing, analytics, and threat detection</span>
            </div>
          </div>
        </section>

        <Projects />

        <section className="marquee-band" aria-label="Machine learning themes">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="marquee-line" key={index}>
                <span>Embeddings</span>
                <span>Image Processing</span>
                <span>Evaluation</span>
                <span>Secure Systems</span>
                <span>Deep Learning</span>
                <span>Analytics</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="studio"
          className="systems-band grid min-h-screen items-center px-5 py-28 md:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="reveal section-kicker">Systems</p>
              <h2 className="reveal mt-3 text-5xl font-black uppercase leading-none md:text-7xl">
                Models I can trust in the real world
              </h2>
            </div>
            <div className="reveal space-y-8">
              <p className="max-w-3xl text-2xl font-semibold leading-snug text-zinc-100 md:text-4xl">
                I build practical ML systems across data preparation, model
                training, evaluation, image processing, Flask APIs, and secure
                user-facing tools.
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
                From experiments to production-ready work
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

        <section id="education" className="education-band px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="reveal section-kicker">Education</p>
                <h2 className="reveal mt-3 text-5xl font-black uppercase leading-none text-zinc-50 md:text-7xl">
                  Computer science foundation
                </h2>
              </div>
              <p className="reveal max-w-2xl text-base leading-7 text-zinc-300">
                My academic path is anchored in CS fundamentals, DSA, OOP,
                operating systems, DBMS, computer networks, and applied software work.
              </p>
            </div>

            <div className="education-grid">
              {education.map((item) => (
                <article className="reveal education-card" key={item.title}>
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <strong>{item.institution}</strong>
                  <span>{item.detail}</span>
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
                Practical AI systems with clear interfaces: retrieval stacks,
                image-processing models, analytics dashboards, secure file tools,
                real-time APIs, and evaluation workflows that make quality visible.
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
          <div className="mx-auto grid min-h-[72vh] max-w-7xl gap-10 px-5 py-24 md:grid-cols-[1fr_1fr] md:px-8">
            <div className="grid gap-px md:grid-cols-1">
              {recognitions.map((item) => (
                <div className="reveal stat-cell" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="credentials-panel reveal">
              <p className="section-kicker">Certificates & Leadership</p>
              <h2>Proof beyond projects</h2>
              <div className="credentials-list">
                {credentials.map((item) => (
                  <article key={item}>
                    <span>Certificate</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
              <div className="credentials-columns">
                <div className="responsibility-list">
                  <p className="section-kicker">Leadership</p>
                  {responsibilities.map((item) => (
                    <article key={item.role}>
                      <span>{item.period}</span>
                      <h3>{item.role}</h3>
                      <p>{item.summary}</p>
                    </article>
                  ))}
                </div>
                <div className="credentials-mini">
                  <p className="section-kicker">Core Subjects</p>
                  <ul>
                    <li>DSA</li>
                    <li>OOP</li>
                    <li>Operating Systems</li>
                    <li>DBMS</li>
                    <li>Computer Networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-band">
          <div className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center gap-8 px-5 py-24 md:px-8">
            <p className="reveal section-kicker">Contact</p>
            <a
              className="reveal contact-link"
              href="mailto:hello@gaurangi.studio"
            >
              hello@gaurangi.studio
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
