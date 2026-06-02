import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import projectsData from "../../data/projectData";
import fallbackProjectImage from "../../assets/logo.webp";

function getProjectLinkLabel(project) {
    if (project.linkLabel) return project.linkLabel;
    return project.link.includes("github.com") ? "View source" : "Open site";
}

function ProjectCard({ project }) {
    const projectImage = project.image || fallbackProjectImage;

    return (
        <article className="project-card group">
            <div className="project-frame">
                <span className="project-meta">
                    {project.category || "Project"}
                </span>
                {project.year ? (
                    <span className="project-meta">{project.year}</span>
                ) : null}
            </div>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[26px] bg-slate-100"
            >
                <img
                    src={projectImage}
                    alt={project.alt || `${project.title} project preview`}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[280px]"
                    loading="lazy"
                />
            </a>
            <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
                <h3 className="font-display text-3xl leading-tight text-slate-950">
                    {project.title}
                </h3>
                <p className="section-copy mt-3">
                    {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <li key={tech} className="tech-pill">
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 border-t border-slate-200 pt-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-sky-700"
                    >
                        {getProjectLinkLabel(project)}
                        <FiArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </article>
    );
}

function Projects() {
    return (
        <section className="surface-card px-6 py-8 sm:px-8 sm:py-10">
            <div className="mx-auto">
                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                        My Projects
                    </h2>
                    <p className="section-copy mt-4">
                        A mix of client work, front-end experiments, and small
                        apps that helped me practice responsive UI, interaction
                        design, and shipping to real users.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
