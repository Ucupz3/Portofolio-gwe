import React from "react";
import { FaAward, FaEye, FaExternalLinkAlt } from "react-icons/fa";

const Certificate = () => {
    const certificates = [
        {
        id: 1,
        title: "Meta React",
        issuer: "Coursera",
        description: "Sertifikasi profesional Human-Centered Design dan prototyping.",
        image: "/images/sertif4.jpeg",
        link: "https://www.coursera.org/account/accomplishments/specialization/0AMXNGOU7N0T"
        },
        {
        id: 2,
        title: "Full-Stack Web Development: PHP, HTML, CSS & JavaScript",
        issuer: "Microsoft",
        description: "Fundamental desain antarmuka modern dan aksesibilitas.",
        image: "/images/sertif1.jpeg",
        link: "https://www.coursera.org/account/accomplishments/specialization/DUNBXZONOR53"
        },
        {
        id: 3,
        title: "Google UX Design",
        issuer: "Dicoding Indonesia",
        description: "Membangun aplikasi web kompleks dengan React & Redux.",
        image: "/images/sertif3.jpeg",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/TV3H84TCW49F"
        },
        {
        id: 4,
        title: "Microsoft UX Design",
        issuer: "Dicoding Indonesia",
        description: "Implementasi Tailwind CSS dan React Hooks lanjutan.",
        image: "/images/sertif2.jpeg",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/TV3H84TCW49F"
        },
    ];

    return (
        <section id="certificates" className="py-24 bg-sapphire text-ice min-h-screen relative overflow-hidden">
        
        {/* Background Pattern: garis diagonal tipis */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%">
            <defs>
                <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y="0" x2="0" y2="40" stroke="currentColor" strokeWidth="2" className="text-powder" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
            </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block p-4 bg-blue-100 rounded-full shadow-md mb-4">
                <FaAward className="text-4xl text-sapphire" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-100 mb-4">
                Lisensi & <span className="text-powder">Sertifikasi</span>
            </h2>
            <div className="w-24 h-1.5 bg-powder mx-auto rounded-full mb-4"></div>
            <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                Validasi kompetensi profesional saya melalui berbagai pelatihan berstandar industri.
            </p>
            </div>

            {/* Grid Sertifikat */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
                <div
                key={cert.id}
                className="group bg-white rounded-xl overflow-hidden border border-blue-200 shadow-md hover:shadow-2xl hover:shadow-powder/20 transition-all duration-300 flex flex-col"
                >
                {/* Image dengan overlay */}
                <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-blue-50">
                    <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-sapphire/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                    >
                    <span className="text-white bg-white/20 border border-white px-4 py-2 rounded-full flex items-center gap-2 font-medium text-sm">
                        <FaEye /> Lihat Detail
                    </span>
                    </a>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-powder bg-sapphire/5 px-2 py-1 rounded w-fit mb-3">
                    {cert.issuer}
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2 leading-tight group-hover:text-sapphire transition-colors">
                    {cert.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-4 flex-grow">
                    {cert.description}
                    </p>
                    <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-semibold text-sapphire flex items-center gap-2 hover:underline decoration-powder decoration-2 underline-offset-4"
                    >
                    Tampilkan Kredensial <FaExternalLinkAlt size={12} />
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Certificate;