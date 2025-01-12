'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  useEffect(() => {
    const glowEffects = document.querySelectorAll(".glow-effect");

    glowEffects.forEach((glowEffect) => {
      const glowLines = glowEffect.querySelectorAll("rect");
      glowLines.forEach((line) => {
        line.setAttribute("rx", "8");
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-dark-bg text-white px-4 md:px-0 pt-36 pb-24">
      <div className="container mx-auto">
        <div className="absolute inset-0 z-0" style={{
          background: 'radial-gradient(circle, rgba(12, 166, 233, 1) 0%, rgba(12, 166, 233, 0.07) 15%)',
          backgroundPosition: 'center -120px',
          filter: 'blur(100px)',
        }} />
        
        <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-[32px] md:gap-6 glow-effect">
          <div className="animate-fade-in-up bg-background text-white px-4 py-2 text-sm font-medium mb-4 z-10 relative overflow-hidden" style={{ borderRadius: '8px' }}>
            <span className="absolute inset-0 border border-transparent animate-border"></span>
            ✨ Introducing Insights
            <svg className="absolute inset-0">
              <rect pathLength="100" strokeLinecap="round" className="glow-blur" />
              <rect pathLength="100" strokeLinecap="round" className="glow-line" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-b from-[#FFFFFF] to-[#999EA9] inline-block text-transparent bg-clip-text z-10 mb-4">
            The Snowflake optimization and cost management platform
          </h1>
          
          <h3 className="text-xl text-white/80 max-w-2xl mt-2 z-10">
            Gain deep visibility into Snowflake usage, optimize performance and automate savings with the click of a button.
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8 z-10">
            <button className="w-full md:w-[178px] h-[48px] px-4 py-2 bg-primary-blue text-white rounded-xl font-semibold shadow-primary-btn hover:bg-primary-blue/90 transition-colors">
              Book a Demo
            </button>
            <button className="w-full md:w-[178px] h-[48px]">Start Free Trial</button>
          </div>
        </div>
        
        <div className="w-full mt-12 z-10">
          <Image 
            src="/images/hero-image.svg"
            alt="Hero illustration"
            width={1240}
            height={870}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 1000px"
            style={{
              maxWidth: '100%',
              height: 'auto',
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;