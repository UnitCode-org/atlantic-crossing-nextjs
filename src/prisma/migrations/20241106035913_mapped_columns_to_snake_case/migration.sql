/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Intent` table. All the data in the column will be lost.
  - You are about to drop the column `explorerId` on the `Intent` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `Intent` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Intent` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `earthoneLink` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `earthoneRole` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `instagramLink` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `linkedinLink` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Person` table. All the data in the column will be lost.
  - Added the required column `explorer_id` to the `Intent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `person_id` to the `Intent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Intent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earthone_link` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earthone_role` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram_link` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin_link` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Intent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "explorer_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "intent" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Intent" ("id", "intent") SELECT "id", "intent" FROM "Intent";
DROP TABLE "Intent";
ALTER TABLE "new_Intent" RENAME TO "Intent";
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "earthone_link" TEXT NOT NULL,
    "organisation" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "instagram_link" TEXT NOT NULL,
    "linkedin_link" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "offer" TEXT NOT NULL,
    "need" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "guild" TEXT NOT NULL,
    "earthone_role" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Person" ("action", "bio", "guild", "id", "location", "name", "nationality", "need", "offer", "organisation", "points", "title", "website") SELECT "action", "bio", "guild", "id", "location", "name", "nationality", "need", "offer", "organisation", "points", "title", "website" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
