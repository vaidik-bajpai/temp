import ProjectCard from "../components/project-cards";
const projects = [
  {
    code: "01",
    title: "DDoS Detection System",
    type: "Python / Scikit-learn / Flask",
    year: "2025",
    description:
      "I built a predictive ML system for real-time DDoS detection using Random Forest and SVM, trained and evaluated on large-scale network traffic records.",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "Matplotlib"],
    highlights: [
      "Achieved 94% detection accuracy",
      "Processed 120,000+ network records",
      "Reduced simulated threat exposure by 70%",
    ],
  },
  {
    code: "02",
    title: "ShadowDrop",
    type: "Secure steganography tool",
    year: "2025",
    link: "https://github.com/gaurangi813/SteganoProject",
    description:
      "I built a secure image steganography tool that encrypts files before embedding them into images for covert storage and controlled access.",
    tech: ["Python", "OpenCV", "Cryptography", "NumPy", "PIL", "Tkinter"],
    highlights: [
      "AES-256-CBC file encryption",
      "PBKDF2-HMAC-SHA256 password protection",
      "Adaptive 1/2/4-bit LSB encoding",
    ],
  },
  {
    code: "03",
    title: "MindMate",
    type: "AI mental health chatbot",
    year: "2024",
    description:
      "I created an AI-powered chatbot for real-time emotional support with multimodal emotion detection from facial expressions and voice tone.",
    tech: ["Python", "TensorFlow", "OpenCV", "NLTK", "Flask", "Streamlit"],
    highlights: [
      "85%+ response relevance",
      "88% emotion detection accuracy",
      "Flask API and Streamlit interface",
    ],
  },
];

const Projects = () => {
  return (
    <section id="work" className="work-band border-y border-zinc-100/10">
      <div className="mx-auto grid min-h-screen max-w-7xl content-center px-5 py-24 md:px-8">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="reveal section-kicker">Selected work</p>
            <h2 className="reveal mt-3 text-5xl font-black uppercase leading-none text-zinc-50 md:text-7xl">
              Applied systems
            </h2>
          </div>
          <p className="reveal max-w-lg text-base leading-7 text-zinc-300">
            Projects I built across threat detection, secure image
            steganography, and multimodal AI support tools.
          </p>
        </div>

        <div className="project-grid reveal">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                code={project.code}
                type={project.type}
                description={project.description}
                year={project.year}
                tech={project.tech}
                highlights={project.highlights}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
