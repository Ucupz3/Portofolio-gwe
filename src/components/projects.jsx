import React from "react";
import { projectsData } from "../data/projects.js";
import { FaArrowRight, FaLaptopCode } from "react-icons/fa";

const Projects = () => {
    const webProjects = projectsData.filter((p) => p.type === "W");
    const designProjects = projectsData.filter((p) => p.type === "D");

    return (
        <section id="projects" className="py-24 bg-blue-100 text-navy relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%">
            <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" className="text-sapphire" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block p-4 bg-sapphire rounded-full shadow-md mb-10">
                <FaLaptopCode className="text-4xl text-blue-100" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-sapphire mb-4">
                Proyek Saya
            </h2>
            <div className="w-24 h-1.5 bg-navy mx-auto rounded-full mb-4"></div>
            <p className="text-navy/80 max-w-2xl mx-auto text-lg">
                Kumpulan hasil karya yang memadukan logika kode dan estetika desain.
            </p>
            </div>

            {/* Web Projects */}
            <h3 className="text-2xl font-bold text-sapphire mb-8">🌐 Web Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {webProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>

            {/* Design Projects */}
            <h3 className="text-2xl font-bold text-sapphire mb-8">🎨 Design Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {designProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>

            {/* Tombol Lihat Github */}
            <div className="text-center mt-16">
            <a
                href=""
                className="inline-flex items-center gap-2 text-sapphire font-bold hover:text-navy transition-colors text-lg"
            >
                Lihat repositori lainnya <FaArrowRight />
            </a>
            </div>
        </div>
        </section>
    );
    };

    // Komponen kartu project biar reusable
    const ProjectCard = ({ project }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
        <div className="relative overflow-hidden h-60">
        <div className="absolute inset-0 bg-sapphire/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <span className="bg-white text-sapphire py-2 px-4 rounded-full font-bold shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            Coming Soon
            </span>
        </div>
        <img
            src={project.imageUrl}
            alt={project.title}
            className={`${project.imageSize || "w-40 h-40"} object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500`}
        />
        </div>
        <div className="p-8 flex flex-col flex-grow">
        <span className="text-xs font-bold text-sapphire uppercase tracking-wider mb-2">
            {project.type === "W" ? "Web Development" : "Design"}
        </span>
        <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-sapphire transition-colors">
            {project.title}
        </h3>
        <p className="text-navy/70 mb-6 leading-relaxed line-clamp-3 flex-grow">
            {project.description}
        </p>
        <div className="mt-auto pt-6 border-t border-blue-100">
            <div className="inline-flex items-center gap-2 text-gray-400 bg-gray-100 py-3 px-6 rounded-lg font-semibold w-full justify-center cursor-not-allowed">
            Coming Soon
            </div>
        </div>
        </div>
    </div>
);

export default Projects;