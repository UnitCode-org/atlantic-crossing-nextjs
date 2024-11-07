import Card from '@/components/ui/card';
import Navbar from '@/components/ui/Navbar';
import { getPersonById, getNonMutuals, getMutuals } from '@/services/person';
import { redirect } from 'next/navigation';
import React from 'react';
import Avatar from './_components/Avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

async function MatchesPage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect('/');
  }

  const nonMutuals = await getNonMutuals(personId);
  const mutuals = await getMutuals(personId);

  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <Navbar personId={personId} />
      <div className='overflow-y-auto flex items-center w-full pb-40'>
        <div className='flex-grow w-20 p-12 flex flex-col items-center'>
          <div className='w-fit'>
            <h2 className='text-[32px] font-semibold w-fit'>Atlantic Crossing</h2>
            <p className='text-[20px] font-semibold w-fit'>
              Welcome, <span className='text-primary'>{currentPerson.name}</span>
            </p>
          </div>
        </div>
        <Card className='w-[48rem] h-full pb-0'>
          <div>
            <h2 className='text-[20px] font-semibold pt-4 pb-6'>Mutual Matches</h2>
            <div className='flex'>
              {mutuals.map((person) => (
                <Link key={person.id} className='w-16' href={person.earthoneLink}>
                    <Avatar />
                  <p className='text-sm text-center w-full pt-2'>{person.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className='pt-4 overflow-y-clip'>
            <h2 className='text-[20px] font-semibold pt-4 pb-6'>People you want to meet</h2>
            <div className='flex flex-col gap-4 overflow-y-auto h-80'>
              {nonMutuals.map((person) => (
                <div key={person.id} className='w-full flex justify-between items-center last:pb-8'>
                  <div className='flex items-center gap-4'>
                    <Avatar />
                    <p className='text-sm text-center w-full pt-2'>{person.name}</p>
                  </div>
                  <Button asChild className='py-6 w-28 font-semibold'>
                    <Link target='_blank' href={person.earthoneLink}>
                      Visit
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <div className='flex-grow w-20'></div>
      </div>
      <div className='flex-grow w-full'></div>
    </div>
  );
}

export default MatchesPage;