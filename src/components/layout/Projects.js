import React from "react";
import projectsData from "../projectData";

    const ProjectCard = ({ project }) => (
        <div
            key={project.id}
            className="flex flex-col overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
        >
            <div className="relative h-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between bg-white p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                        {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    View Project
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );

    function Projects() {
        return (
            <div className="mx-auto pt-16 pb-24 sm:pt-16 sm:pb-16">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <p className="mx-auto max-w-lg text-center text-3xl font-semibold text-balance text-gray-600 sm:text-4xl">
                        My Projects
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

export default Projects;