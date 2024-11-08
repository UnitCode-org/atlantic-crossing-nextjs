import Navbar from '@/components/ui/Navbar';
import { getAllPersons, getPersonById } from '@/services/person';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ProfileCard from './_components/ProfileCard';

async function ProfilePage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect('/');
  }

  let randomInt;
  do {
    randomInt = Math.floor(Math.random() * 321) + 1;
  } while (randomInt === personId);

  const meetPerson = await getPersonById(117);
  if (!meetPerson) {
    return redirect('/');
  }

  const persons = await getAllPersons();

  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <div className='flex justify-center items-center text-center flex-col xl:hidden pt-8 px-16'>
        <h2 className='text-[28px] font-semibold w-fit'>Atlantic Crossing</h2>
        <p className='text-[16px] font-semibold w-fit pt-1'>
          Welcome, <span className='text-primary'>{currentPerson.name}</span>
        </p>
        <Link className='text-xs font-semibold text-primary underline' href={`/`}>
          That&apos;s not me
        </Link>
      </div>
      <Navbar personId={currentPerson.id} />
      <div className='overflow-y-auto flex items-center justify-center w-full h-full pb-12 xl:pb-32'>
        <div className='flex-grow w-20 p-12 hidden xl:flex flex-col items-center'>
          <div className='w-fit'>
            <h2 className='text-[32px] font-semibold w-fit'>Atlantic Crossing</h2>
            <p className='text-[20px] font-semibold w-fit'>
              Welcome, <span className='text-primary'>{currentPerson.name}</span>
            </p>
            <Link className='text-sm font-semibold text-primary underline' href={`/`}>
              That&apos;s not me
            </Link>
          </div>
        </div>
        <ProfileCard persons={persons} currentPersonId={personId} />
        <div className='flex-grow w-20 hidden xl:block'></div>
      </div>
      <div className='flex-grow w-full'></div>
    </div>
  );
}

export default ProfilePage;
