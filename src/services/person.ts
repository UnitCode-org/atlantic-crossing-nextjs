'use server';

import prisma from '@/lib/db';
import { Person } from '@prisma/client';

export async function getAllPersons(sortByPoints: boolean = false) {
  const persons = sortByPoints
    ? await prisma.person.findMany({
        orderBy: {
          points: 'desc',
        },
      })
    : await prisma.person.findMany();
  return persons;
}

export async function getPersonById(id: number) {
  const person = await prisma.person.findUnique({
    where: { id },
  });
  return person;
}

export async function getNonMutuals(personId: number) {
  const persons = await prisma.person.findMany({
    where: {
      meets: {
        some: {
          explorerId: personId,
        },
      },
    },
  });
  return persons;
}

export async function getMutuals(personId: number) {
  const persons = await prisma.person.findMany({
    where: {
      meets: {
        some: {
          explorerId: personId,
        },
      },
    },
  });

  const mutuals: Person[] = [];
  for (const person of persons) {
    const theirPersons = await prisma.person.findMany({
      where: {
        meets: {
          some: {
            explorerId: person.id,
          },
        },
      },
    });

    if (theirPersons.some((theirPerson) => theirPerson.id === personId)) {
      mutuals.push(person);
    }
  }

  return mutuals;
}
