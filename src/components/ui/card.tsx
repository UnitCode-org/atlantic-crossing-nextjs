import { cn } from '@/lib/utils';
import React from 'react';

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('bg-white rounded-lg p-8 shadow-sm', className)}>{children}</div>;
}

export default Card;