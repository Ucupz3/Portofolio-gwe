import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PopUp = ({ type, message, onClose }) => {
  const [show, setShow] = useState(false);

  // FIX: Gunakan setTimeout agar tidak dianggap "Synchronous Update" oleh ESLint
  // Ini juga memastikan browser sempat me-render state awal (hidden) sebelum animasi mulai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10); // Jeda 10ms cukup untuk memicu transisi CSS

    return () => clearTimeout(timer); // Membersihkan timer jika komponen di-unmount cepat
  }, []);

  const isSuccess = type === "success";
  
  const config = {
    icon: isSuccess ? <FaCheckCircle size={50} /> : <FaTimesCircle size={50} />,
    title: isSuccess ? "Berhasil!" : "Terjadi Kesalahan",
    iconColor: isSuccess ? "text-green-500" : "text-red-500",
    bgIcon: isSuccess ? "bg-green-100" : "bg-red-100",
  };

  const handleClose = () => {
    setShow(false);
    // Beri jeda 300ms (sesuai duration-300 di CSS) agar animasi keluar selesai dulu
    setTimeout(onClose, 300); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>

      {/* Kartu PopUp */}
      <div 
        className={`relative bg-white w-full max-w-sm mx-4 rounded-2xl shadow-2xl p-6 text-center transform transition-all duration-300 ${
            show ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl ${isSuccess ? "bg-green-500" : "bg-red-500"}`}></div>

        <div className={`mx-auto w-20 h-20 flex items-center justify-center rounded-full mb-4 ${config.bgIcon} ${config.iconColor}`}>
          {config.icon}
        </div>

        <h2 className="text-2xl font-bold text-navy mb-2">
          {config.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {message}
        </p>

        <div className="flex gap-3 justify-center">
            <button
                onClick={handleClose}
                className="w-full py-3 px-6 rounded-xl font-bold text-white bg-sapphire hover:bg-navy shadow-lg shadow-sapphire/30 hover:shadow-navy/30 transition-all duration-300 transform hover:-translate-y-1"
            >
                {isSuccess ? "Lanjutkan" : "Coba Lagi"}
            </button>
        </div>

      </div>
    </div>
  );
};

export default PopUp;