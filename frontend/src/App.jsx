import React, { useState, useEffect } from 'react';
import { products } from './mock/products';
import { ShopHeader } from './components/ShopHeader';
import { ShopProductCard } from './components/ShopProductCard';
import { ShopFilterButtons } from './components/ShopFilterButtons';
import { ShopCartSidebar } from './components/ShopCartSidebar';
import { ShopWhatsappButton } from './components/ShopWhatsappButton';
import { ShopCheckoutModal } from './components/ShopCheckoutModal';
import { ShopConfirmationModal } from './components/ShopConfirmationModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'Todos' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    setCartItems([]);
    setIsCheckoutModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 font-sans antialiased">
      <ShopHeader
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItems.reduce((count, item) => count + item.quantity, 0)}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
      />

      <main className="container mx-auto px-4 py-8 pt-24 ">
        <ShopFilterButtons
          categories={categories}
          onFilterChange={setActiveFilter}
          activeFilter={activeFilter}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ShopProductCard key={product.idg7} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>

      <ShopCartSidebar
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        onCloseCart={() => setIsCartOpen(false)}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <ShopWhatsappButton />

      <ShopCheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onConfirmPurchase={handleConfirmPurchase}
      />

      <ShopConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  );
}

export default App;