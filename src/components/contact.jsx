import React from "react";
// Import Icons
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-sapphire text-white relative overflow-hidden">
      
      {/* Dekorasi Background (Glow Effect) agar sapphire tidak flat */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* BAGIAN KIRI: Informasi & Ajakan */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ayo Buat Sesuatu <br />
              <span className="text-powder">Yang Hebat Bersama.</span>
            </h2>
            
            <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan proyek pengembangan web, desain produk, atau sekadar kemitraan. Jangan ragu untuk menyapa!
            </p>

            <div className="space-y-6">
              {/* Item Kontak 1: Email */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-powder">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Saya</h4>
                  <a href="mailto:emailkamu@example.com" className="text-blue-200 hover:text-white transition-colors">
                    emailkamu@example.com
                  </a>
                </div>
              </div>

              {/* Item Kontak 2: Lokasi */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-powder">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Lokasi</h4>
                  <p className="text-blue-200">Indonesia (Remote Available)</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-12">
              <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider mb-4">Ikuti Saya</p>
              <div className="flex gap-4">
                <SocialLink href="#" icon={<FaLinkedin />} />
                <SocialLink href="#" icon={<FaGithub />} />
                <SocialLink href="#" icon={<FaInstagram />} />
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: Formulir (Glassmorphism Card) */}
          <div className="lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Kirim Pesan</h3>
              
              <form className="space-y-6">
                {/* Input Nama */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-powder focus:ring-1 focus:ring-powder transition-all"
                  />
                </div>

                {/* Input Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-powder focus:ring-1 focus:ring-powder transition-all"
                  />
                </div>

                {/* Input Pesan */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">Pesan</label>
                  <textarea 
                    id="message"
                    rows="4"
                    placeholder="Ceritakan tentang proyek Anda..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-powder focus:ring-1 focus:ring-powder transition-all resize-none"
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
                <button 
                  type="submit" // Nanti bisa disambungkan ke Formspree atau EmailJS
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2 shadow-lg"
                >
                  Kirim Sekarang <FaPaperPlane size={14} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Kecil */}
        <div className="border-t border-white/10 mt-20 pt-8 text-center text-blue-300/60 text-sm">
          <p>© {new Date().getFullYear()} Yusuf Ricky Hartono. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
};

// Komponen Kecil untuk Link Sosmed
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-powder hover:text-sapphire hover:border-powder transition-all duration-300 text-xl"
  >
    {icon}
  </a>
);

export default Contact;