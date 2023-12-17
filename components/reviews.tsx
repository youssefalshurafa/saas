'use client';
import React from 'react';
import SectionHeading from './section-heading';

import { useSectionInView } from '@/lib/hooks';
import ReviewCard from './reviewCard';

export default function Reviews() {
  const { ref } = useSectionInView('Reviews', 0.5);

  return (
    <section id="reviews" ref={ref} className="scroll-mt-28 mb-28 ">
      <SectionHeading>reviews</SectionHeading>
      <ReviewCard />
    </section>
  );
}
