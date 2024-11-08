-- CreateTable
CREATE TABLE "Meet" (
    "id" SERIAL NOT NULL,
    "explorer_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meet" ADD CONSTRAINT "Meet_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meet" ADD CONSTRAINT "Meet_explorer_id_fkey" FOREIGN KEY ("explorer_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
