"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '@/hooks/useWindowSize';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mt-5 mb-5 backdrop-blur-sm w-full">
        <div className="w-full min-w-[320px] max-w-[1272px] h-[60px] mx-auto bg-dark-bg/80 border border-[#2F3440CC] rounded-[14px]">
          <div className="flex items-center justify-between h-full px-5 py-3 gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Company Logo"
                width={130}
                height={32}
                priority
                sizes="130px"
                style={{
                  width: 'auto',
                  height: '32px',
                }}
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className={`hidden md:flex items-center gap-8 ${isMobile ? 'flex-col' : 'flex-row'}`}>
              <Link href="/features" className="text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/resources" className="text-white/80 hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-white hover:text-[#0CA6E9] transition-colors">
                Log in
              </button>
              <button className="px-4 py-2 bg-primary-blue text-white rounded-xl font-semibold shadow-primary-btn hover:bg-primary-blue/90 transition-colors">
                Book a Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-white/80 hover:text-white"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;