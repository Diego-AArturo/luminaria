import React from 'react';
import { formatPrice } from '../utils/formatters';

export const ShopCartSidebar = ({ cartItems, isCartOpen, onCloseCart, onRemoveFromCart, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Tu Carrito</h2>
        <button onClick={onCloseCart} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 p-2 bg-gray-50 rounded-lg shadow-sm">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{formatPrice(item.price)} x {item.quantity}</p>
              </div>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800">Subtotal:</span>
          <span className="text-lg font-bold text-gray-900">{formatPrice(subtotal)}</span>
        </div>
        <button
          onClick={onCheckout}
          disabled={cartItems.length === 0}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
            cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
          }`}
        >
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};