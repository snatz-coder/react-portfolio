"use client";
ß
export default function ProjectDemo() {
  const projects = [
    {
      title: "EV Chargers Platform",
      description:
        "A web app to monitor and manage EV chargers, including map view, filters, and user dashboards.",
      techStack: ["React", "Google Maps API"],
      github: "https://github.com/snatz-coder/evChargers",
      liveDemo: "https://ev-chargers-5kmsy70l4-sujanes-projects.vercel.app",
    },
  ];

  return projects.map((project) => (
    <section key={project.title} className="card">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p>{project.description}</p>
      <p>
        <strong>Tech:</strong> {project.techStack.join(", ")}
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        {project.github && (
          <button
            className="btn mt-3"
            onClick={() => window.open(project.github, "_blank")}
          >
            GitHub
          </button>
        )}
        {project.liveDemo && (
          <button
            className="btn mt-3"
            onClick={() => window.open(project.liveDemo, "_blank")}
          >
            Live Demo
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 mt-3"></div>
    </section>
  ));
}
