import React from "react";

const About = () => {
    const skills = [
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Firebase",
        "PHP Native",
        "UI/UX Design",
    ];

    return (
        <section
        id="about"
        className="py-20 bg-sapphire text-blue-100 relative overflow-hidden"
        >
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Tentang <span className="text-powder">Saya</span>
            </h2>
            <div className="w-24 h-1 bg-powder mx-auto rounded-full"></div>
            </div>

            {/* Grid: Gambar + Konten */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Kolom Gambar */}
            <div className="relative group flex justify-center">
                <div className="absolute top-6 left-6 w-full h-full border-2 border-powder rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                
                <img
                src="/images/poto3.png"
                alt="Foto Profil"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover z-10 filter grayscale group-hover:grayscale-0 transition duration-500"
                />
            </div>

            {/* Kolom Konten */}
            <div className="space-y-6 md:pl-6">
                <h3 className="text-2xl font-semibold text-white">
                Front-end Developer & UI/UX Enthusiast
                </h3>
                
                <p className="text-blue-100/90 leading-relaxed text-lg">
                Halo! Saya menggabungkan logika pemrograman dengan estetika desain.
                Fokus saya adalah menciptakan antarmuka web yang tidak hanya berfungsi dengan baik,
                tetapi juga <span className="text-powder font-semibold">intuitif dan menyenangkan</span> bagi pengguna.
                </p>

                <p className="text-blue-100/90 leading-relaxed">
                Selain koding, saya mendalami <strong>Human-Centered Design</strong> melalui sertifikasi
                Google UX Design dan Microsoft UX Design. Saya percaya bahwa kode yang baik harus didukung oleh empati terhadap pengguna.
                </p>

                {/* Skill */}
                <div className="pt-4">
                <h4 className="text-powder font-bold mb-4 uppercase tracking-wide text-sm">
                    Teknologi & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-blue-900/50 border border-blue-700 hover:border-powder px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};

export default About;