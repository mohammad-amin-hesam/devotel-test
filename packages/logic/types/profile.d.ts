import { User } from "./user";
export interface Profile {
  _id: string;
  user: User | string;
  address: string;
  birthDate: string;
  birthPlace: string;
  city: string;
  createdAt: string;
  firstName: string;
  gender: "Male" | "Female";
  foreignCode?: string;
  image: string;
  lastName: string;
  nationalCode: string;
  province: string;
  bio: string;
  updatedAt: string;
}
