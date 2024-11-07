-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "explorer_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Meet_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Meet" ("created_at", "explorer_id", "id", "person_id", "updated_at") SELECT "created_at", "explorer_id", "id", "person_id", "updated_at" FROM "Meet";
DROP TABLE "Meet";
ALTER TABLE "new_Meet" RENAME TO "Meet";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
