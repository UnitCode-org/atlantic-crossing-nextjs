import { Meet } from "./meet";

export type Person = {
  id: number;
  name: string;
  earthoneLink: string;
  organisation: string;
  title: string;
  location: string;
  website: string;
  instagramLink: string;
  linkedinLink: string;
  nationality: string;
  bio: string;
  offer: string;
  need: string;
  action: string;
  guild: string;
  earthoneRole: string;
  points: number;
  meets?: Meet[];
  explorerMeets?: Meet[];
  createdAt: Date;
  updatedAt: Date;
};
