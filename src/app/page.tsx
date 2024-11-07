import { getAllPersons } from '@/services/person';
import WelcomeCard from './_components/WelcomeCard';

export default async function Home() {
  const persons = await getAllPersons();

  return (
    <div className='flex justify-center items-center h-screen welcome-background px-6'>
      <WelcomeCard persons={persons} />
    </div>
  );
}
