import Navbar from '@/components/ui/Navbar';
import { getPersonById } from '@/services/person';
import { redirect } from 'next/navigation';
import React from 'react';

async function MatchesPage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect('/');
  }

  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <Navbar personId={personId} />
    </div>
  );
}

export default MatchesPage;