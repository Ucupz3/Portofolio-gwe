import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";
import PopUp from "../components/popup"; // sesuaikan path

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState(null);

  // Reset popup saat komponen pertama kali dimount (biar reload nggak langsung muncul error)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2a6w0wl",     // Service ID
      "template_86w356n",    // Template ID
      form.current,
      "OWVAeV0RDgCNmXuos"    // Public Key
    ).then(
      () => {
        setPopup({ type: "success", message: "Pesan berhasil dikirim!" });
        form.current.reset();
      },
      (error) => {
        setPopup({ type: "error", message: "Gagal mengirim pesan: " + error.text });
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-blue-100 text-navy relative overflow-hidden">
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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* BAGIAN KIRI */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ayo Buat Sesuatu <br />
              <span className="text-sapphire">Yang Hebat Bersama.</span>
            </h2>
            <p className="text-navy/80 text-lg mb-10 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan proyek pengembangan web, desain produk, atau sekadar kemitraan. Jangan ragu untuk menyapa!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-sapphire/10 p-3 rounded-lg text-sapphire">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Saya</h4>
                  <a href="mailto:yusufrickyhartono09@gmail.com" className="text-navy hover:text-sapphire transition-colors">
                    yusufrickyhartonoZ3@gmail.com
                  </a>
                </div>
              </div>

              {/* Lokasi */}
              <div className="flex items-start gap-4">
                <div className="bg-sapphire/10 p-3 rounded-lg text-sapphire">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Lokasi</h4>
                  <p className="text-navy">
                    <a href="https://maps.app.goo.gl/Krfd9Eoc3GMbKjTU8">Kota Semarang, Indonesia</a> (Remote Available)
                  </p>
                </div>
              </div>
            </div>

            {/* Sosmed */}
            <div className="mt-12">
              <p className="text-sm text-navy font-semibold uppercase tracking-wider mb-4">Ikuti Saya</p>
              <div className="flex gap-4">
                <SocialLink href="https://www.linkedin.com/in/yusufrickyh13" icon={<FaLinkedin />} />
                <SocialLink href="https://github.com/Ucupz3" icon={<FaGithub />} />
                <SocialLink href="https://www.instagram.com/truecupzz" icon={<FaInstagram />} />
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white/70 backdrop-blur-lg border border-sapphire/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-sapphire">Kirim Pesan</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Nama Lengkap</label>
                  <input type="text" name="name" placeholder="John Doe" required
                    className="w-full bg-blue-50 border border-sapphire/30 rounded-lg px-4 py-3 text-navy" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required
                    className="w-full bg-blue-50 border border-sapphire/30 rounded-lg px-4 py-3 text-navy" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">Pesan</label>
                  <textarea name="message" rows="4" placeholder="Ceritakan tentang proyek Anda..." required
                    className="w-full bg-blue-50 border border-sapphire/30 rounded-lg px-4 py-3 text-navy resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-sapphire hover:bg-navy text-white font-bold py-3 px-6 rounded-lg flex justify-center items-center gap-2 shadow-lg">
                  Kirim Sekarang <FaPaperPlane size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-sapphire/20 mt-20 pt-8 text-center text-navy/70 text-sm">
          <p>© {new Date().getFullYear()} Yusuf Ricky Hartono. All rights reserved.</p>
        </div>
      </div>

      {/* PopUp muncul kalau ada status */}
      {popup && (
        <PopUp
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup(null)}
        />
      )}
    </section>
  );
};

// Komponen Sosmed
const SocialLink = ({ href, icon }) => (
  <a href={href} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 border border-sapphire/30 hover:bg-powder hover:text-sapphire hover:border-powder transition-all duration-300 text-xl">
    {icon}
  </a>
);

export default Contact;