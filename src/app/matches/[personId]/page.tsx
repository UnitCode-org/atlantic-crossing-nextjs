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
      <div className='flex justify-center items-center text-center flex-col xl:hidden pt-8 px-16'>
        <h2 className='text-[28px] font-semibold w-fit'>Atlantic Crossing</h2>
        <p className='text-[16px] font-semibold w-fit pt-1'>
          Welcome, <span className='text-primary'>{currentPerson.name}</span>
        </p>
        <Link className='text-xs font-normal text-primary' href={`/`}>
          (that&apos;s not me)
        </Link>
      </div>
      <Navbar personId={personId} />
      <div className='flex items-center justify-center w-full h-full pb-12 xl:pb-32 px-6 xl:px-0 overflow-y-auto'>
        <div className='flex-grow w-20 p-12 hidden xl:flex flex-col items-center'>
          <div className='w-fit'>
            <h2 className='text-[32px] font-semibold w-fit'>Atlantic Crossing</h2>
            <p className='text-[20px] font-semibold w-fit'>
              Welcome, <span className='text-primary'>{currentPerson.name}</span>
            </p>
            <Link className='text-sm font-normal text-primary' href={`/`}>
              (that&apos;s not me)
            </Link>
          </div>
        </div>
        <Card className='w-full md:w-[48rem] h-full p-6 pb-0 md:p-8 md:pb-0 flex flex-col'>
          <div>
            <h2 className='text-[16px] md:text-[20px] font-semibold md:pt-4 pb-4 md:pb-6'>Mutual Matches</h2>
            {mutuals.length === 0 ? (
              <div className='flex flex-col items-center justify-center w-full bg-[#F5F7FD] p-4 xl:p-7 mb-4 border-dashed border-2 border-[#6A45FF] rounded-lg'>
                <p className='text-sm font-semibold text-primary'>No Matches Yet</p>
                <Button asChild className='py-6 px-[4.75rem] w-28 font-semibold text-sm md:text-base mt-4'>
                  <Link href={`/meet/${personId}`}>Meet Others</Link>
                </Button>
              </div>
            ) : (
              <div className='flex gap-5 overflow-x-auto pb-4 -mr-6 md:-mr-8'>
                {mutuals.map((person) => (
                  <Link
                    key={person.id}
                    target='_blank'
                    className='w-14 md:w-16 flex flex-col justify-center items-center last:mr-6 md:last:mr-8'
                    href={person.earthoneLink}
                  >
                    <Avatar name={person.name} />
                    <p className='text-xs md:text-sm text-center w-full pt-2'>{person.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className='h-full flex flex-col overflow-y-auto'>
            <h2 className='text-[16px] md:text-[20px] font-semibold pt-4 pb-4 md:pb-6'>People you want to meet</h2>
            {nonMutuals.length === 0 ? (
              <div className='flex flex-col items-center justify-center w-full bg-[#F5F7FD] px-4 py-10 xl:px-7 xl:py-20 mb-8 border-dashed border-2 border-[#6A45FF] rounded-lg'>
                <p className='text-sm font-semibold text-primary'>No People To Meet Yet</p>
                <Button asChild className='py-6 px-[4.75rem] w-28 font-semibold text-sm md:text-base mt-4'>
                  <Link href={`/meet/${personId}`}>Meet Others</Link>
                </Button>
              </div>
            ) : (
              <div className='flex flex-col gap-4 h-full overflow-y-auto'>
                {nonMutuals.map((person) => (
                  <div
                    key={person.id}
                    className='w-full flex justify-between items-center last:pb-6 md:last:pb-8 gap-4'
                  >
                    <div className='flex items-center gap-2 md:gap-4'>
                      <Avatar name={person.name} />
                      <p className='text-xs md:text-sm w-full text-left'>{person.name}</p>
                    </div>
                    <Button asChild className='text-sm py-5 px-7 md:text-base md:py-6 md:w-28 font-semibold'>
                      <Link target='_blank' href={person.earthoneLink}>
                        Visit
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
        <div className='flex-grow w-20 hidden xl:block'></div>
      </div>
      <div className='flex-grow w-full'></div>
    </div>
  );
}

export default MatchesPage;