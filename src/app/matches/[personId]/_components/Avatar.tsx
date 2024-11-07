import { User } from 'iconsax-react';
import React from 'react';

function Avatar() {
  return (
    <div className='flex items-center gap-4 bg-[#F3EFFD] p-4 rounded-full w-fit h-fit'>
      <User size={34} variant='Bold' color='#6A45FF' />
    </div>
  );
}

export default Avatar;