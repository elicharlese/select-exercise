import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { Testimonials } from '@/components/Testimonials';

// Metadata for this page
export const metadata: Metadata = {
  title: 'Snowflake Optimization Platform - Home',
  description: 'Optimize your Snowflake performance and reduce costs with our advanced analytics platform.',
};

// Page component
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-dark-bg overflow-x-hidden">
        {/* Fixed Navigation */}
        <Navbar />

        {/* Hero Section - Above the fold */}
        <HeroSection />

        {/* Testimonials Section */}
        <section id="testimonials" className="relative">
          <Testimonials />
        </section>
      </main>

      {/* Preload critical images */}
      <link
        rel="preload"
        href="/images/hero-images.svg"
        as="image"
        type="image/svg+xml"
      />
      <link
        rel="preload"
        href="/images/logo.svg"
        as="image"
        type="image/svg+xml"
      />
    </>
  );
}

// Generate static page at build time
export const dynamicExport = 'force-static';
export const revalidate = 3600; // Revalidate every hour