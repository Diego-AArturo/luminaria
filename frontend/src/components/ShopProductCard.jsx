import React from 'react';
import { formatPrice } from '../utils/formatters';

export const ShopProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <p className="text-xl font-bold text-gray-800 mb-4">{formatPrice(product.price)}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-[black] text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};