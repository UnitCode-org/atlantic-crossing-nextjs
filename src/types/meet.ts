import { Person } from "./person";

export type Meet = {
  id: number;
  explorerId: number;
  personId: number;
  person: Person;
  explorer: Person;
  createdAt: Date;
  updatedAt: Date;
};
