import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white rounded-lg p-8 shadow-sm'>
      {children}
    </div>
  );
}

export default Card;