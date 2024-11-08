'use client';

import React from 'react';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function Navbar({ personId }: { personId: number | undefined }) {
  const pathname = usePathname();

  return (
    <nav className='py-6 md:py-8 flex items-center gap-1 px-20'>
      <Button
        asChild
        className={cn(
          'text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24',
          pathname.includes('/meet')
            ? 'bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary'
            : 'bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80'
        )}
      >
        <Link href={personId ? `/meet/${personId}` : '/meet'}>Meet</Link>
      </Button>
      <Button
        asChild
        className={cn(
          'text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24',
          pathname.includes('/leaderboard')
            ? 'bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary'
            : 'bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80'
        )}
      >
        <Link href={personId ? `/leaderboard/${personId}` : '/leaderboard'}>Leaderboard</Link>
      </Button>
      <Button
        asChild
        className={cn(
          'text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24',
          pathname.includes('/matches')
            ? 'bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary'
            : 'bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80'
        )}
      >
        <Link href={personId ? `/matches/${personId}` : '/matches'}>Matches</Link>
      </Button>
      <Button
        asChild
        className={cn(
          'text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24',
          pathname.includes('/insta')
            ? 'bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary'
            : 'bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80'
        )}
      >
        <Link href={personId ? `/insta/${personId}` : '/insta'}>Insta</Link>
      </Button>
      <Button
        asChild
        className={cn(
          'text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24',
          pathname.includes('/profile')
            ? 'bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary'
            : 'bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80'
        )}
      >
        <Link href={personId ? `/profile/${personId}` : '/profile'}>Profile</Link>
      </Button>
    </nav>
  );
}

export default Navbar;
