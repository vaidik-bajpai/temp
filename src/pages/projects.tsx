import ProjectCard from "../components/project-cards";
const projects = [
  {
    code: "01",
    title: "Model Observatory",
    type: "MLOps / monitoring",
    year: "2026",
    description:
      "Placeholder case study for drift tracking, evaluation dashboards, alert thresholds, and model health reporting.",
  },
  {
    code: "02",
    title: "Retrieval Engine",
    type: "RAG / vector search",
    year: "2025",
    description:
      "Placeholder case study for embeddings, ranking experiments, chunking strategies, and answer quality checks.",
  },
  {
    code: "03",
    title: "Forecast Stack",
    type: "Time series / pipelines",
    year: "2025",
    description:
      "Placeholder case study for feature engineering, baseline comparison, retraining cadence, and batch inference.",
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
              ML case files
            </h2>
          </div>
          <p className="reveal max-w-lg text-base leading-7 text-zinc-300">
            Placeholder archive of experiments, pipelines, model services, and
            evaluation systems built around measurable outcomes.
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
