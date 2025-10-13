'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modal from './ui/Modal';
import { useCart } from '@/context/CartContext';
import MiniCart from './MiniCart';

const HeaderNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSecondaryNav, setActiveSecondaryNav] = useState('New Arrivals');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const { itemCount } = useCart(); // Real cart count from context
  const pathname = usePathname();

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const primaryNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Women', href: '/women' },
    { name: 'Products', href: '/products' },
    // { name: 'About', href: '/about' }, // TODO: Add About page in future
  ];

  const secondaryNavItems = [
    { name: 'New Arrivals', isSale: false },
    { name: 'Best-Sellers', isSale: false },
    { name: 'Clothing', isSale: false },
    { name: 'Tops & Sweaters', isSale: false },
    { name: 'Pants & Jeans', isSale: false },
    { name: 'Outerwear', isSale: false },
    { name: 'Shoes & Bags', isSale: false },
    { name: 'Sale', isSale: true },
  ];

  // Determine active primary nav based on pathname
  const getActivePrimaryNav = () => {
    if (pathname === '/') return 'Home';
    if (pathname.startsWith('/women')) return 'Women';
    if (pathname.startsWith('/products')) return 'Products';
    // if (pathname.startsWith('/about')) return 'About'; // TODO: Add About page in future
    return '';
  };

  const activePrimaryNav = getActivePrimaryNav();

  const getActivePrimaryStyles = (itemName: string) => {
    const isActive = activePrimaryNav === itemName;
    
    return isActive
      ? 'font-medium border-b-2 border-black text-black transition-all duration-200'
      : 'font-medium hover:text-gray-600 transition-all duration-200';
  };

  const getActiveSecondaryStyles = (item: { name: string; isSale?: boolean }) => {
    if (item.isSale) {
      return activeSecondaryNav === item.name 
        ? 'font-medium text-red-600 transition-colors duration-200 cursor-pointer' 
        : 'font-medium text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer';
    }
    
    return activeSecondaryNav === item.name 
      ? 'font-medium text-gray-700 transition-colors duration-200 cursor-pointer' 
      : 'font-medium text-gray-500 hover:text-gray-600 transition-colors duration-200 cursor-pointer';
  };

  return (
    <>
      <Modal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message="This feature will be in the real version"
      />

      <MiniCart isOpen={isMiniCartOpen} onClose={() => setIsMiniCartOpen(false)} />
      
      <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 xl:shadow-sm ${isMobileMenuOpen ? '' : ''}`}>
        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Row A (Primary Links) - Left - Hidden on mobile */}
            <nav className="hidden md:flex space-x-5 text-sm">
              {primaryNavItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={getActivePrimaryStyles(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Row B (Logo) - Center */}
            <div className="text-center flex-1 md:flex-none">
              <Link href="/" className="text-xl font-zen-dots tracking-wide uppercase hover:text-gray-700 transition-colors duration-200">
                Everlane
              </Link>
            </div>
            
            {/* Row C (Utility Icons) - Right */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button 
                onClick={handleModalOpen}
                aria-label="Search" 
                className="hover:text-gray-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <Link 
                href="/wishlist"
                aria-label="Wishlist" 
                className="hover:text-gray-600 transition-colors duration-200 relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </Link>
              <button 
                onClick={handleModalOpen}
                aria-label="Account" 
                className="hover:text-gray-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
              <button 
                onClick={() => setIsMiniCartOpen(true)}
                aria-label="Cart" 
                className="hover:text-gray-600 transition-colors duration-200 relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out">
            <div className="px-4 py-4 space-y-3">
              {primaryNavItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`block py-2 px-3 rounded-md transition-all duration-200 ${
                    activePrimaryNav === item.name 
                      ? 'border-l-4 bg-gray-50 font-medium border-black text-black'
                      : 'border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border-b border-gray-300"></div>

        {/* Secondary Navigation */}
        <div className="bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop Secondary Menu */}
            <nav className="hidden md:flex justify-center space-x-5 py-3 text-sm">
              {secondaryNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveSecondaryNav(item.name);
                    handleModalOpen();
                  }}
                  className={getActiveSecondaryStyles(item)}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
