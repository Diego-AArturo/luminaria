import React from 'react';

export const ShopWhatsappButton = () => {
  const phoneNumber = "+57318868359"; // Reemplaza con tu número de WhatsApp
  const message = "Hola, me gustaría obtener más información sobre sus productos.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/src/assets/whatsapp-logo-thin-svgrepo-com.svg" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};