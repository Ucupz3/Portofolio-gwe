import React from "react";
import { projectsData } from "../data/projects.js";
// Pastikan install react-icons: npm install react-icons
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    // Background Section TETAP bg-blue-100 sesuai permintaan
    <section id="projects" className="py-24 bg-blue-100 text-navy">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-sapphire mb-4">
            Proyek Saya
          </h2>
          <div className="w-24 h-1.5 bg-navy mx-auto rounded-full mb-4"></div>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            Kumpulan hasil karya yang memadukan logika kode dan estetika desain.
          </p>
        </div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              // PERUBAHAN UTAMA: 
              // 1. bg-white (agar kontras dengan bg-blue-100)
              // 2. group (untuk trigger animasi anak elemen)
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Bagian Gambar */}
              <div className="relative overflow-hidden h-60">
                {/* Overlay warna saat hover */}
                <div className="absolute inset-0 bg-sapphire/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                   
                </div>
                
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Bagian Konten */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Kategori/Tag Kecil (Opsional) */}
                <span className="text-xs font-bold text-sapphire uppercase tracking-wider mb-2">
                    Development
                </span>

                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-sapphire transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-navy/70 mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tombol Action */}
                <div className="mt-auto pt-6 border-t border-blue-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-sapphire hover:bg-navy py-3 px-6 rounded-lg font-semibold transition-colors duration-300 w-full justify-center"
                    >
                      Lihat Detail <FaExternalLinkAlt size={14} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Github (Opsional) */}
        <div className="text-center mt-16">
            <a href="https://github.com/" className="inline-flex items-center gap-2 text-sapphire font-bold hover:text-navy transition-colors text-lg">
                Lihat repositori lainnya <FaArrowRight />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;