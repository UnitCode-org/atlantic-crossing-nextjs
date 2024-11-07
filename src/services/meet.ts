'use server';

import prisma from '@/lib/db';

export async function meetPerson(explorerId: number, personId: number) {
  // Check if meet already exists
  const existingMeet = await prisma.meet.findFirst({
    where: {
      personId,
      explorerId,
    },
  });

  if (existingMeet) {
    return existingMeet;
  }

  // Create new meet if it doesn't exist
  const meet = await prisma.meet.create({
    data: {
      personId,
      explorerId,
    },
  });

  return meet;
}
