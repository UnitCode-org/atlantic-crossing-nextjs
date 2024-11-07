import { getPersonById } from '@/services/person';
import { redirect } from 'next/navigation';
import React from 'react';

async function LeaderboardPage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);
  const currentPerson = await getPersonById(personId);
  if (!currentPerson) {
    return redirect('/');
  }
  
  return <div></div>;
}

export default LeaderboardPage;
