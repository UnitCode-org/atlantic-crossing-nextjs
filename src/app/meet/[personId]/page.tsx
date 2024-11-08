import Card from '@/components/ui/card';
import Navbar from '@/components/ui/Navbar';
import { Separator } from '@/components/ui/separator';
import { getPersonById } from '@/services/person';
import { Briefcase, Link as LinkIcon, Location } from 'iconsax-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import MeetButton from './_components/MeetButton';
import NextButton from './_components/NextButton';
import { fixHref } from '@/lib/utils';

async function MeetPage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect('/');
  }

  let randomInt;
  do {
    randomInt = Math.floor(Math.random() * 321) + 1;
  } while (randomInt === personId);

  const meetPerson = await getPersonById(randomInt);
  if (!meetPerson) {
    return redirect('/');
  }

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
      <Navbar personId={currentPerson.id} />
      <div className='overflow-y-auto flex items-center justify-center w-full h-full'>
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
        <Card className='w-[48rem] overflow-y-auto h-full mx-6 p-6 md:p-8'>
          <h1 className='text-[20px] md:text-[32px] font-semibold pb-5 md:pb-6'>{meetPerson.name}</h1>
          <div className='grid md:grid-cols-2 gap-4 overflow-hidden'>
            <div className='bg-[#F6F7FE] rounded-lg p-4 h-fit flex flex-col gap-2 overflow-hidden'>
              <h2 className='text-base font-semibold'>Profile</h2>
              {meetPerson.organisation !== '' && meetPerson.title !== '' && (
                <div className='flex gap-2'>
                  <Briefcase size='16' variant='Bold' color='#8E8E93' className='shrink-0' />
                  <div className='flex-col gap-1'>
                    {meetPerson.organisation !== '' && <p className='text-xs font-inter'>{meetPerson.organisation}</p>}
                    {meetPerson.title !== '' && <p className='text-xs font-inter'>{meetPerson.title}</p>}
                  </div>
                </div>
              )}
              {meetPerson.location !== '' && (
                <div className='flex gap-2'>
                  <Location size='16' variant='Bold' color='#8E8E93' className='shrink-0' />
                  <p className='text-xs font-inter'>{meetPerson.location}</p>
                </div>
              )}
              <div className='flex gap-2'>
                <LinkIcon size='16' variant='Bold' color='#8E8E93' className='shrink-0' />
                <div className='flex flex-col gap-1 w-full overflow-hidden'>
                  {meetPerson.website !== '' && (
                    <Link
                      href={fixHref(meetPerson.website)}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition truncate'
                    >
                      {meetPerson.website}
                    </Link>
                  )}
                  {meetPerson.instagramLink !== '' && (
                    <Link
                      href={fixHref(meetPerson.instagramLink)}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition truncate'
                    >
                      {meetPerson.instagramLink}
                    </Link>
                  )}
                  {meetPerson.linkedinLink !== '' && (
                    <Link
                      href={fixHref(meetPerson.linkedinLink)}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition truncate'
                    >
                      {meetPerson.linkedinLink}
                    </Link>
                  )}
                  {meetPerson.earthoneLink !== '' && (
                    <Link
                      href={fixHref(meetPerson.earthoneLink)}
                      target='_blank'
                      className='text-xs font-inter hover:text-primary/80 transition truncate'
                    >
                      {meetPerson.earthoneLink}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='bg-[#F6F7FE] rounded-lg p-4 flex flex-col gap-4'>
              {meetPerson.bio && (
                <>
                  <div>
                    <h2 className='text-base font-semibold'>Bio</h2>
                    <p className='text-xs font-inter'>{meetPerson.bio}</p>
                  </div>
                  <Separator className='last:hidden' />
                </>
              )}
              {meetPerson.offer && (
                <>
                  <div>
                    <h2 className='text-base font-semibold'>Offer</h2>
                    <p className='text-xs font-inter'>{meetPerson.offer}</p>
                  </div>
                  <Separator className='last:hidden' />
                </>
              )}
              {meetPerson.need && (
                <>
                  <div>
                    <h2 className='text-base font-semibold'>Need</h2>
                    <p className='text-xs font-inter'>{meetPerson.need}</p>
                  </div>
                  <Separator className='last:hidden' />
                </>
              )}
              {meetPerson.action && (
                <>
                  <div>
                    <h2 className='text-base font-semibold'>Action</h2>
                    <p className='text-xs font-inter'>{meetPerson.action}</p>
                  </div>
                  <Separator className='last:hidden' />
                </>
              )}
              {meetPerson.guild && (
                <>
                  <div>
                    <h2 className='text-base font-semibold'>Guild</h2>
                    <p className='text-xs font-inter'>{meetPerson.guild}</p>
                  </div>
                  <Separator className='last:hidden' />
                </>
              )}
            </div>
          </div>
        </Card>
        <div className='flex-grow w-20 hidden xl:block'></div>
      </div>
      <div className='flex items-center gap-7 pb-4 pt-6'>
        <NextButton />
        <MeetButton personId={currentPerson.id} meetPersonId={meetPerson.id} />
      </div>
    </div>
  );
}

export default MeetPage;
