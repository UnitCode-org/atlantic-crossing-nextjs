-- CreateTable
CREATE TABLE "Intent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "explorerId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "intent" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "earthoneLink" TEXT NOT NULL,
    "organisation" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "instagramLink" TEXT NOT NULL,
    "linkedinLink" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "offer" TEXT NOT NULL,
    "need" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "guild" TEXT NOT NULL,
    "earthoneRole" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
