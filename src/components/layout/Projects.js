import React from "react";
import projectsData from "../projectData";

const ProjectCard = ({ project }) => (
    <div
        key={project.id}
        className="flex flex-col overflow-hidden rounded-xl shadow-md bg-white transition-transform hover:scale-[1.02] hover:shadow-lg"
    >
        <div className="relative h-[280px]">
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-center text-blue-600"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                />
            </a>
        </div>
        <div className="flex flex-1 flex-col p-4">
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                    {project.title}
                </h3>
                <p className="mt-2 text-lg text-gray-800 text-left">
                    {project.description}
                </p>

                <div className="mt-3 text-lg text-gray-500 mt-4">
                    {project.tech.join(", ")}
                </div>
            </div>
        </div>
    </div>
);

function Projects() {
    return (
        <div className="w-full mx-auto py-10">
            <div className="mx-auto max-w-2xl px-0 lg:max-w-7xl lg:px-0">
                <h2 className="mb-10 text-center text-4xl font-bold text-gray-800 uppercase tracking-wider">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
