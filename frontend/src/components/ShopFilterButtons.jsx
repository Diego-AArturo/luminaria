import React from 'react';

export const ShopFilterButtons = ({ categories, onFilterChange, activeFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <button
        onClick={() => onFilterChange('Todos')}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeFilter === 'Todos'
            ? 'bg-black text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === category
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};