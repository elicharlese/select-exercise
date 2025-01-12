"use client";

import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { useWindowSize } from '@/hooks/useWindowSize';
import { type Testimonial } from '@/types';

const TESTIMONIALS_LEFT: Testimonial[] = [
  {
    name: "Sarah Chen",
    jobTitle: "Data Engineer at TechCorp",
    comment: "\"The insights we've gained have transformed how we manage our Snowflake costs. It's been a game-changer for our team. We couldn't be happier with the results! This platform has truly exceeded our expectations, and I can't imagine working without it now.\"",
    imageUrl: "/images/user1.svg"
  },
  {
    name: "Michael Roberts",
    jobTitle: "Data Architect at BigQuery",
    comment: "\"We've reduced our Snowflake spend by 40% while improving query performance. The ROI has been incredible. This tool is essential for our operations! I highly recommend it to anyone looking to optimize their data management. It has made a significant difference in our workflow efficiency.\"",
    imageUrl: "/images/user1.svg"
  },
  {
    name: "Emily Thompson",
    jobTitle: "Analytics Manager at DataCo",
    comment: "\"The platform's insights helped us identify and fix inefficient queries we didn't even know about. It's a must-have for any data team! The support team has also been incredibly helpful throughout our journey. Their guidance has been invaluable in maximizing our use of the platform.\"",
    imageUrl: "/images/user1.svg"
  }
];

const TESTIMONIALS_MIDDLE: Testimonial[] = [
  {
    name: "James Wilson",
    jobTitle: "Analytics Lead at DataFlow",
    comment: "\"This platform has helped us optimize our queries and significantly reduce our compute costs. We recommend it to everyone! The user interface is intuitive and easy to navigate, making it a pleasure to use. It has truly transformed our approach to data analysis.\"",
    imageUrl: "/images/user1.svg"
  },
  {
    name: "Alex Martinez",
    jobTitle: "Senior Data Analyst at ScaleUp",
    comment: "\"The real-time monitoring and alerts have prevented several costly query overruns. Absolutely essential tool. It has saved us countless hours! I feel more in control of our data costs than ever before. This tool has become an integral part of our daily operations.\"",
    imageUrl: "/images/user1.svg"
  },
  {
    name: "Rachel Kim",
    jobTitle: "Cloud Operations Manager at DataTech",
    comment: "\"Implementation was smooth and we saw cost savings within the first week. The ROI is undeniable. This is a game-changer for our team! I can't imagine going back to our old processes after using this tool. It has streamlined our workflow significantly.\"",
    imageUrl: "/images/user1.svg"
  }
];

const TESTIMONIALS_RIGHT: Testimonial[] = [
  {
    name: "Maria Garcia",
    jobTitle: "BI Director at CloudScale",
    comment: "\"The automated savings features have paid for themselves many times over. Highly recommended! This tool is invaluable for our business! It has truly transformed how we approach data management. I can't recommend it enough to my colleagues.\"",
    imageUrl: "/images/user1.svg"
  },
  {
    name: "David Park",
    jobTitle: "Data Platform Lead at FinTech",
    comment: "\"Their optimization suggestions helped us cut our warehouse costs in half. The insights are invaluable. We can't imagine working without it! The analytics provided are top-notch and very actionable. This has empowered our team to make better decisions.\"",
    imageUrl: "/images/user1.svg"
  },
  {
    name: "Sophie Anderson",
    jobTitle: "Analytics Director at DataFirst",
    comment: "\"We now have complete visibility into our Snowflake usage. It's transformed how we manage our resources. This is a must-have for any data-driven organization! I feel empowered to make data-driven decisions with confidence. The impact on our performance has been remarkable.\"",
    imageUrl: "/images/user1.svg"
  }
];

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until mounted
  }

  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <div key={`${testimonial.name}-${index}`} className="mb-4 md:mb-8 animate-fade-in">
      <TestimonialCard {...testimonial} />
    </div>
  );

  return (
    <div className="relative mx-auto">
      <section className={`relative py-12 md:py-20 overflow-hidden ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-[#38BDF9] font-medium mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Supercharging thousands of Snowflake users</h2>
          </div>
        </div>
      </section>

      <div className="relative w-full h-auto mx-auto overflow-hidden">
        <div className={`flex ${isMobile ? 'flex-col' : 'gap-4 md:gap-8 justify-center'} h-full animate-fade-in`}>
          {!isMobile && (
            <>
              <div className="animate-scroll-down">
                {TESTIMONIALS_LEFT.map(renderTestimonialCard)}
              </div>
              <div className="animate-scroll-up">
                {TESTIMONIALS_MIDDLE.map(renderTestimonialCard)}
              </div>
              <div className="animate-scroll-down">
                {TESTIMONIALS_RIGHT.map(renderTestimonialCard)}
              </div>
            </>
          )}
          {isMobile && (
            <div className="animate-scroll-up">
              {TESTIMONIALS_MIDDLE.map(renderTestimonialCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
