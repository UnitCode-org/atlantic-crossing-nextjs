'use server';

import prisma from '@/lib/db';

export async function getAllPersons() {
  const persons = await prisma.person.findMany();
  return persons;
}
