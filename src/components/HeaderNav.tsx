'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePrimaryNav, setActivePrimaryNav] = useState('Home');
  const [activeSecondaryNav, setActiveSecondaryNav] = useState('New Arrivals');
  const pathname = usePathname();

  // Set active navigation based on current pathname
  useEffect(() => {
    if (pathname === '/') {
      setActivePrimaryNav('Home');
    } else if (pathname === '/about') {
      setActivePrimaryNav('About');
    } else if (pathname === '/categories') {
      setActivePrimaryNav('Categories');
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const primaryNavItems = [
    { name: 'Categories', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Home', href: '/' },
  ];

  const secondaryNavItems = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Best-Sellers', href: '#' },
    { name: 'Clothing', href: '#' },
    { name: 'Tops & Sweaters', href: '#' },
    { name: 'Pants & Jeans', href: '#' },
    { name: 'Outerwear', href: '#' },
    { name: 'Shoes & Bags', href: '#' },
    { name: 'Sale', href: '#', isSale: true },
  ];

  const getActivePrimaryStyles = (itemName: string) => {
    if (itemName === 'Home') {
      return pathname === '/' 
        ? 'font-medium border-b-2 border-black text-black'
        : 'font-medium hover:text-gray-600  hover:border-gray-300';
    } else if (itemName === 'Categories') {
      return activePrimaryNav === itemName 
        ? 'font-medium border-b-2 border-gray-500 text-gray-700' 
        : 'font-medium hover:text-gray-600  hover:border-gray-300';
    } else if (itemName === 'About') {
      return activePrimaryNav === itemName 
        ? 'font-medium border-b-2 border-green-500 text-green-600' 
        : 'font-medium hover:text-gray-600  hover:border-gray-300';
    }
    return 'font-medium hover:text-gray-600';
  };

  const getActiveSecondaryStyles = (item: { name: string; isSale?: boolean }) => {
    if (item.isSale) {
      return activeSecondaryNav === item.name 
        ? 'font-medium text-red-600 border-red-500' 
        : 'font-medium text-red-500 hover:text-red-600 ';
    }
    
    return activeSecondaryNav === item.name 
      ? `font-medium text-gray-500 ` 
      : `font-medium text-gray-500 hover:text-gray-600 `;
  };

  return (
    <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 ${isMobileMenuOpen ? 'absolute top-0 left-0 w-full' : ''}`}>
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-md"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
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
                onClick={() => setActivePrimaryNav(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Row B (Logo) - Center */}
          <div className="text-center flex-1 md:flex-none">
            <Link href="/" className="text-xl font-zen-dots tracking-wide uppercase">Everlane</Link>
          </div>
          
          {/* Row C (Utility Icons) - Right */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button aria-label="Search" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button aria-label="Account" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
            <button aria-label="Cart" className="hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 relative">
          <div className="px-4 py-4 space-y-4 absolute top-0 left-0 w-full bg-white">
            {primaryNavItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`block py-2 ${getActivePrimaryStyles(item.name).replace('border-b-2', 'border-l-4').replace('hover:border-b-2', 'hover:border-l-4')}`}
                onClick={() => setActivePrimaryNav(item.name)}
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
              <Link 
                key={item.name}
                href={item.href} 
                className={getActiveSecondaryStyles(item)}
                onClick={() => setActiveSecondaryNav(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
