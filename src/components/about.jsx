import React from "react";
import { FaUser } from "react-icons/fa";

const About = () => {
    const skills = [
        "JavaScript (ES6+)",
        "Kotlin",
        "Python",
        "PHP",
        "React.js",
        "Tailwind CSS",
        "Git & GitHub",
        "Node.js",
        "Firebase",
        "MySQL",
        "REST API",
        "Embedded Systems & IoT",
        "UI/UX Design",
    ];

    return (
        <section
        id="about"
        className="py-20 bg-sapphire min-h-screen text-blue-100 relative overflow-hidden"
        >
        {/* Background Pattern: diagonal lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%">
            <defs>
                <pattern
                id="diagonal"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
                >
                <line
                    x1="0"
                    y="0"
                    x2="0"
                    y2="40"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-powder"
                />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
            </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block p-4 bg-ice rounded-full shadow-md mb-10">
                <FaUser className="text-4xl text-navy" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                About <span className="text-powder">Me</span>
            </h2>
            <div className="w-24 h-1 bg-powder mx-auto rounded-full"></div>
            </div>

            {/* Grid: Gambar + Konten */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Kolom Gambar */}
            <div className="relative group flex justify-center">
                <div className="absolute border-2 border-powder rounded-2xl transform translate-x-2 translate-y-2 transition-transform
                2xl:top-[-52px] xl:top-[-48px] lg:top-[-42px] md:top-[-36px] sm:top-[-40px] top-[-10px]
                2xl:left-[10px] xl:left-[-18px] lg:left-[-25px] md:left-[-44px] sm:left-[20px] left-[-10px]
                2xl:w-[520px] xl:w-[480px] lg:w-[380px] md:w-[320px] sm:w-[450px] w-full
                h-full
                2xl:group-hover:translate-x-[130px] 2xl:group-hover:translate-y-[110px] 
                xl:group-hover:translate-x-[110px] xl:group-hover:translate-y-[100px] 
                lg:group-hover:translate-x-[96px] lg:group-hover:translate-y-[84px]
                md:group-hover:translate-x-[90px] md:group-hover:translate-y-[70px]
                sm:group-hover:translate-x-[110px] sm:group-hover:translate-y-[86px]
                ">
                </div>
                <img
                src="/images/about/poto6.png"
                alt="Foto Profil"
                className="relative 2xl:w-[520px] xl:w-[480px] lg:w-[380px] md:w-[320px] sm:w-[460px] w-[400px]
                rounded-2xl shadow-2xl object-cover z-10 filter grayscale group-hover:grayscale-0 transition duration-500"
                />
            </div>

            {/* Kolom Konten */}
            <div className="space-y-6 md:pl-6">
                <h3 className="text-2xl font-semibold text-white">
                Computer Engineering Technology Student | Full-Stack Developer | AI & IoT Enthusiast
                </h3>
                <p className="text-blue-100/90 leading-relaxed text-lg">
                Hello! I'm a Computer Engineering Technology student at Politeknik Negeri Semarang (POLINES)
                <span className="text-powder font-semibold"> with a strong passion for building impactful technology.</span>
                I enjoy developing full-stack web applications, exploring artificial intelligence, and creating IoT and robotics projects that solve real-world problems.
                </p>
                <p className="text-blue-100/90 leading-relaxed">
                I believe technology should be both functional and enjoyable to use. <strong>By combining software engineering with UI/UX principles, </strong> 
                I aim to create applications that are efficient, intuitive, and provide meaningful experiences for users.
                </p>

                {/* Skill */}
                <div className="pt-4">
                <h4 className="text-powder font-bold mb-4 uppercase tracking-wide text-sm">
                    Technologies & Tools
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