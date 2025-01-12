import React from 'react';
import Image from 'next/image';
import { type Testimonial } from '@/types';

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  jobTitle,
  comment,
  imageUrl,
  className,
}) => {
  return (
    <div className={`w-full md:w-[397.33px] h-[320px] bg-card-bg backdrop-blur-sm border border-card-border rounded-[24px] pt-6 px-8 pb-3 shadow-testimonial ${className}`}>
      <p className="text-white/80 mb-6">
        {comment}
      </p>
      
      <div className="flex items-center gap-4">
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          width={48}
          height={48}
          className="rounded-full"
          sizes="48px"
          loading="lazy"
          style={{
            width: '48px',
            height: '48px',
            objectFit: 'cover',
          }}
        />
        <div>
          <h4 className="text-white">
            {name}
          </h4>
          <p className="text-white/80 text-sm">
            {jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 