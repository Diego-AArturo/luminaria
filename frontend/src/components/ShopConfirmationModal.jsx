import React from 'react';

export const ShopConfirmationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm text-center transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-center mb-4">
          <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">¡Compra Exitosa!</h2>
        <p className="text-gray-600 mb-6">Tu pedido ha sido procesado y será enviado pronto.</p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};