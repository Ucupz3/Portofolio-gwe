import React, { useState, useEffect } from "react";

const Hero = () => {
    const images = [
        "/images/poto4.png",
        "/images/poto5.png",
    
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        }, 2000); // ganti setiap 2 detik

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
        id="hero"
        className="relative bg-blue-100 min-h-screen flex items-center overflow-hidden"
        >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Bagian Kiri: Teks */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-powder text-sapphire text-sm font-semibold mb-2">
                👋 Selamat Datang di Portfolio Saya
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold text-sapphire leading-tight">
                Hai, Saya <br />
                <span className="text-navy">Yusuf Ricky</span>
                </h1>

                <p className="text-lg md:text-xl text-navy max-w-lg mx-auto md:mx-0 leading-relaxed">
                Seorang <strong>Front-end Developer</strong> yang mengubah kode
                menjadi pengalaman visual yang interaktif, responsif, dan estetik.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a
                    href="#projects"
                    className="bg-sapphire hover:bg-navy text-ice font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1"
                >
                    Lihat Karya Saya
                </a>
                <a
                    href="#contact"
                    className="bg-powder hover:bg-ice text-navy border border-sapphire font-bold py-3 px-8 rounded-full shadow-sm transition duration-300 hover:border-navy"
                >
                    Hubungi Saya
                </a>
                </div>
            </div>

            {/* Bagian Kanan: Foto/Avatar dengan slideshow */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="absolute inset-0 bg-sapphire rounded-full blur-2xl transform scale-90"></div>
                <img
                src={images[currentIndex]}
                alt="Yusuf Ricky Hartono"
                className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-ice z-10 transition-opacity duration-700"
                />
            </div>
            </div>
        </div>
        </section>
    );
};

export default Hero;