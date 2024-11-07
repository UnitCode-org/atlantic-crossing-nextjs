/*
  Warnings:

  - You are about to drop the `Intent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Intent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Meet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "explorer_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
