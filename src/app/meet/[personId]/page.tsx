import Card from '@/components/ui/card';
import Navbar from '@/components/ui/Navbar';
import { Separator } from '@/components/ui/separator';
import { getPersonById } from '@/services/person';
import { Briefcase, Link as LinkIcon, Location } from 'iconsax-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import MeetButton from './_components/MeetButton';
import NextButton from './_components/NextButton';

async function MeetPage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect('/');
  }

  let randomInt;
  do {
    randomInt = Math.floor(Math.random() * 300) + 1;
  } while (randomInt === personId);

  const meetPerson = await getPersonById(randomInt);
  if (!meetPerson) {
    return redirect('/');
  }

  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <Navbar personId={currentPerson.id} />
      <div className='overflow-y-auto flex items-center w-full'>
        <div className='flex-grow w-20 p-12 flex flex-col items-center'>
          <div className='w-fit'>
            <h2 className='text-[32px] font-semibold w-fit'>Atlantic Crossing</h2>
            <p className='text-[20px] font-semibold w-fit'>
              Welcome, <span className='text-primary'>{currentPerson.name}</span>
            </p>
          </div>
        </div>
        <Card className='w-[48rem] overflow-y-auto h-full'>
          <h1 className='text-[32px] font-semibold pb-6'>{meetPerson.name}</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-[#F6F7FE] rounded-lg p-4 h-fit flex flex-col gap-2'>
              <h2 className='text-base font-semibold'>Profile</h2>
              <div className='flex gap-2'>
                <Briefcase size='16' variant='Bold' color='#8E8E93' />
                <p className='text-xs font-inter'>{meetPerson.organisation}</p>
              </div>
              <div className='flex gap-2'>
                <Location size='16' variant='Bold' color='#8E8E93' />
                <p className='text-xs font-inter'>{meetPerson.location}</p>
              </div>
              <div className='flex gap-2'>
                <LinkIcon size='16' variant='Bold' color='#8E8E93' />
                <div className='flex flex-col gap-1'>
                  {meetPerson.website !== '' && (
                    <Link
                      href={meetPerson.website}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition'
                    >
                      {meetPerson.website}
                    </Link>
                  )}
                  {meetPerson.instagramLink !== '' && (
                    <Link
                      href={meetPerson.instagramLink}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition'
                    >
                      {meetPerson.instagramLink}
                    </Link>
                  )}
                  {meetPerson.linkedinLink !== '' && (
                    <Link
                      href={meetPerson.linkedinLink}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition'
                    >
                      {meetPerson.linkedinLink}
                    </Link>
                  )}
                  {meetPerson.earthoneLink !== '' && (
                    <Link
                      href={meetPerson.earthoneLink}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition'
                    >
                      {meetPerson.earthoneLink}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='bg-[#F6F7FE] rounded-lg p-4 flex flex-col gap-4'>
              <div>
                <h2 className='text-base font-semibold'>Bio</h2>
                <p className='text-xs font-inter'>{meetPerson.bio}</p>
              </div>
              <Separator />
              <div>
                <h2 className='text-base font-semibold'>Offer</h2>
                <p className='text-xs font-inter'>{meetPerson.offer}</p>
              </div>
            </div>
          </div>
        </Card>
        <div className='flex-grow w-20'></div>
      </div>
      <div className='flex items-center gap-7 pb-4 pt-6'>
        <NextButton />
        <MeetButton personId={currentPerson.id} meetPersonId={meetPerson.id} />
      </div>
    </div>
  );
}

export default MeetPage;
