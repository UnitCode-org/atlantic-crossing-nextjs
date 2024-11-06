import { getPersonById } from '@/services/person';
import React from 'react';

async function MeetPage({ params }: { params: Promise<{ personId: string }> }) {
  const personId = parseInt((await params).personId);

  const person = await getPersonById(personId);

  return (
    <div>
      {JSON.stringify(person)}
    </div>
  );
}

export default MeetPage;