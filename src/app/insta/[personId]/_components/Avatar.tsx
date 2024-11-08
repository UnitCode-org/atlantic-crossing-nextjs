import { getInitials } from '@/lib/utils';
import React from 'react';

function Avatar({ name }: { name: string }) {
  return (
    <div className='flex items-center justify-center gap-4 bg-[#F3EFFD] p-2 md:p-4 min-w-12 min-h-12 md:min-w-16 md:min-h-16 rounded-full'>
      <p className='text-primary font-bold text-lg md:text-xl'>{getInitials(name)}</p>
    </div>
  );
}

export default Avatar;