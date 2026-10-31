import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { SearchBarModal } from './components/common/SearchBarModal';
import { WishlistModal } from './components/common/WishlistModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { ProductDetailModal } from './components/shop/ProductDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CraftLibraryPage } from './pages/CraftLibraryPage';
import { ArtisansPage } from './pages/ArtisansPage';
import { CustomisePage } from './pages/CustomisePage';
import { StoryImpactPage } from './pages/StoryImpactPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactFaqPage } from './pages/ContactFaqPage';

import { Product, CartItem, Language } from './types';
import { PRODUCTS_DATA } from './data/products';
import { safeStorage } from './utils/storage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('en');

  // Modals state
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Selected entities for deep view
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [craftFilterForShop, setCraftFilterForShop] = useState<string>('All');
  const [artisanIdToView, setArtisanIdToView] = useState<string | undefined>(undefined);

  // Discount state from cart to checkout
  const [checkoutDiscount, setCheckoutDiscount] = useState<{ percent: number; code: string }>({
    percent: 0,
    code: ''
  });

  // Cart state persisted safely to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = safeStorage.getItem('shrikala_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    const initialProduct = PRODUCTS_DATA[3]; // Sujini Tote Bag
    return initialProduct
      ? [{ product: initialProduct, selectedSize: 'One Size (16" x 15" x 4")', quantity: 1 }]
      : [];
  });

  // Wishlist state persisted safely to localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = safeStorage.getItem('shrikala_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return ['sk-prod-101', 'sk-prod-102']; // Default saved pieces
  });

  // Sync cart safely
  useEffect(() => {
    try {
      safeStorage.setItem('shrikala_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Sync wishlist safely
  useEffect(() => {
    try {
      safeStorage.setItem('shrikala_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Cart Handlers
  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, selectedSize: size, quantity }];
      }
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.product.id === productId && item.selectedSize === size))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Buy Now Handler (Quick checkout)
  const handleBuyNow = (product: Product, size: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity = quantity;
        return updated;
      }
      return [...prevCart, { product, selectedSize: size, quantity }];
    });
    setCheckoutOpen(true);
  };

  // Navigation Helpers
  const navigateToTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCraftInShop = (craftName: string) => {
    setCraftFilterForShop(craftName);
    setCurrentTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewArtisanProfile = (artisanId: string) => {
    setArtisanIdToView(artisanId);
    setCurrentTab('artisans');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCraftDetail = (craftName: string) => {
    setCraftFilterForShop(craftName);
    setCurrentTab('crafts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-[#B33927] selection:text-white pattern-khadi">
      {/* Sticky Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={navigateToTab}
        language={language}
        setLanguage={setLanguage}
        cartCount={totalCartCount}
        openCart={() => setCartOpen(true)}
        wishlistCount={wishlist.length}
        openWishlist={() => setWishlistOpen(true)}
        openSearch={() => setSearchOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={navigateToTab}
            onSelectProduct={setSelectedProduct}
            onAddToCart={(p, sz) => handleAddToCart(p, sz, 1)}
            wishlistIds={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onSelectCraft={handleExploreCraftInShop}
            onSelectArtisan={handleViewArtisanProfile}
            language={language}
          />
        )}

        {currentTab === 'shop' && (
          <ShopPage
            onSelectProduct={setSelectedProduct}
            onAddToCart={(p, sz) => handleAddToCart(p, sz, 1)}
            wishlistIds={wishlist}
            onToggleWishlist={handleToggleWishlist}
            language={language}
            initialCraftFilter={craftFilterForShop !== 'All' ? craftFilterForShop : undefined}
          />
        )}

        {currentTab === 'crafts' && (
          <CraftLibraryPage
            onSelectProduct={setSelectedProduct}
            onExploreCraftProducts={handleExploreCraftInShop}
            selectedCraftSlug={craftFilterForShop !== 'All' ? craftFilterForShop : undefined}
            language={language}
          />
        )}

        {currentTab === 'artisans' && (
          <ArtisansPage
            onSelectProduct={setSelectedProduct}
            selectedArtisanId={artisanIdToView}
            language={language}
          />
        )}

        {currentTab === 'customise' && (
          <CustomisePage language={language} />
        )}

        {currentTab === 'story' && (
          <StoryImpactPage language={language} />
        )}

        {currentTab === 'partner' && (
          <PartnerPage language={language} />
        )}

        {currentTab === 'contact' && (
          <ContactFaqPage language={language} />
        )}
      </main>

      {/* Reusable Modals & Drawers */}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        language={language}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onSelectProduct={setSelectedProduct}
        onViewArtisan={handleViewArtisanProfile}
        onViewCraft={handleViewCraftDetail}
      />

      {/* Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={(discountPercent, discountCode) => {
          setCheckoutDiscount({ percent: discountPercent, code: discountCode });
          setCheckoutOpen(true);
        }}
        language={language}
      />

      {/* Wishlist Drawer */}
      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(p, sz) => handleAddToCart(p, sz, 1)}
        onSelectProduct={setSelectedProduct}
        language={language}
      />

      {/* Live Search Modal */}
      <SearchBarModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
        onSelectProduct={setSelectedProduct}
        onSelectCraft={handleExploreCraftInShop}
        onSelectArtisan={handleViewArtisanProfile}
      />

      {/* Simulated Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        appliedDiscount={checkoutDiscount.percent}
        discountCode={checkoutDiscount.code}
        onClearCart={handleClearCart}
        language={language}
      />

      {/* Floating WhatsApp Studio Contact Button */}
      <FloatingWhatsApp language={language} />

      {/* Global Heritage Footer */}
      <Footer setCurrentTab={navigateToTab} language={language} />
    </div>
  );
}
