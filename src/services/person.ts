'use server';

import prisma from '@/lib/db';

export async function getAllPersons() {
  const persons = await prisma.person.findMany();
  return persons;
}

export async function getPersonById(id: number) {
  const person = await prisma.person.findUnique({
    where: { id },
  });
  return person;
}

