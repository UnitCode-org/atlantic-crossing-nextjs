import fs from 'fs';
import csv from 'csv-parser';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const results: Prisma.PersonCreateInput[] = [];

  // Path to your CSV file
  const filePath = 'attendees.csv';

  // Create a promise to process the CSV file
  const csvPromise = new Promise<void>((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        // Push each row (cast as User) into the results array
        results.push({
          name: row.name as string,
          earthoneLink: row.earthone_link as string,
          organisation: row.organisation as string,
          title: row.title as string,
          location: row.location as string,
          website: row.website as string,
          instagramLink: row.instagram_link as string,
          linkedinLink: row.linkedin_link as string,
          nationality: row.nationality as string,
          bio: row.bio as string,
          offer: row.offer as string,
          need: row.need as string,
          action: row.action as string,
          guild: row.guild as string,
          earthoneRole: row.earthone_role as string,
          points: 0,
        });
      })
      .on('end', resolve)
      .on('error', reject);
  });

  await csvPromise;

  // Insert data into the database
  for (const user of results) {
    try {
      await prisma.person.create({
        data: user,
      });
    } catch (error) {
      console.error(`Error inserting user ${user.name}:`, error);
    }
  }

  console.log('Database seeding completed');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
