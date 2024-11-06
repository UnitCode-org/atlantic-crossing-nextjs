import { getAllPersons } from '@/services/person';
import WelcomeCard from './_components/WelcomeCard';

export default async function Home() {
  const persons = await getAllPersons();

  return (
    <div className='flex justify-center items-center h-screen'>
      <WelcomeCard persons={persons} />
    </div>
  );
}
