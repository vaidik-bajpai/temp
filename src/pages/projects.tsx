import ProjectCard from "../components/project-cards";
const projects = [
  {
    code: "01",
    title: "Signal Atlas",
    type: "Brand system / motion",
    year: "2026",
    description:
      "A kinetic identity for a product studio, built around distorted grids and fast editorial rhythm.",
  },
  {
    code: "02",
    title: "Blackout Desk",
    type: "Interface design",
    year: "2025",
    description:
      "Dense analytics surfaces with sharp contrast, granular data states, and lightweight interaction loops.",
  },
  {
    code: "03",
    title: "Static Bloom",
    type: "Creative direction",
    year: "2025",
    description:
      "Campaign visuals mixing film grain, broken typography, and tactile product photography treatments.",
  },
];

const Projects = () => {
  return (
    <section id="work" className="work-band border-y border-zinc-100/10">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="reveal section-kicker">Selected work</p>
            <h2 className="reveal mt-3 text-4xl font-black uppercase leading-none text-zinc-50 md:text-6xl">
              Case files
            </h2>
          </div>
          <p className="reveal max-w-md text-sm leading-6 text-zinc-400">
            A compact archive of identities, product surfaces, and campaign
            systems shaped with motion-first thinking.
          </p>
        </div>

        <div className="flex gap-3">
          {projects.map((project) => {
            return (
              <ProjectCard
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
