"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className={`fixed right-0 top-0 bottom-0 w-[280px] bg-card-bg border-l border-card-border z-50 p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end text-white/60 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <span className="sr-only">Close menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col gap-6">
            <Link href="/features" className="text-white/80 hover:text-white transition-colors text-lg" onClick={onClose}>
              Features
            </Link>
            <Link href="/pricing" className="text-white/80 hover:text-white transition-colors text-lg" onClick={onClose}>
              Pricing
            </Link>
            <Link href="/resources" className="text-white/80 hover:text-white transition-colors text-lg" onClick={onClose}>
              Resources
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors text-lg" onClick={onClose}>
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full h-[48px] px-6 py-3 bg-primary-blue text-white rounded-xl font-semibold shadow-primary-btn hover:bg-primary-blue/90 transition-colors">
              Book a Demo
            </button>
            <button className="w-full h-[48px] px-6 py-3 border-2 border-[#0CA6E9] text-[#0CA6E9] rounded-xl font-semibold hover:bg-[#0CA6E9]/10 transition-colors">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;