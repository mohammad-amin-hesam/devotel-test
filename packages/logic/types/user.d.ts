import { Profile } from "./profile";
import { Tutor } from "./tutor";

export interface User {
  _id?: string;
  id?: string;
  code: number;
  mobile: number;
  role: string;
  profile?: Profile;
  tutors: Tutor[] | string[];
  createdAt: string;
  updatedAt: string;
}
