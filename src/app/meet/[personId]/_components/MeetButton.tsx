'use client';

import { Button } from '@/components/ui/button';
import { meetPerson } from '@/services/meet';
import { Profile2User } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function MeetButton({ personId, meetPersonId }: { personId: number; meetPersonId: number }) {
  const router = useRouter();

  async function handleMeet() {
    await meetPerson(personId, meetPersonId);
    router.refresh();
  }

  return (
    <div className='text-center group cursor-pointer' onClick={handleMeet}>
      <Button size='icon' className='rounded-full p-[2.12rem] bg-primary group-hover:bg-primary/80'>
        <Profile2User color='#FFFFFF' variant='Bold' size={32} />
      </Button>
      <p className='text-primary font-semibold group-hover:text-primary/80 transition'>Meet</p>
    </div>
  );
}

export default MeetButton;
