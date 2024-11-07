'use client';

import { Button } from '@/components/ui/button';
import { Next } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function NextButton() {
  const router = useRouter();

  function handleNext() {
    router.refresh();
  }

  return (
    <div className='text-center group cursor-pointer' onClick={handleNext}>
      <Button
        size='icon'
        className='rounded-full p-7 md:p-8 bg-transparent border-2 border-primary group-hover:bg-transparent group-hover:border-primary/80'
      >
        <Next color='#6A45FF' variant='Bold' size={32} className='group-hover:opacity-80 transition' />
      </Button>
      <p className='text-primary font-semibold group-hover:text-primary/80 transition'>Next</p>
    </div>
  );
}

export default NextButton;
