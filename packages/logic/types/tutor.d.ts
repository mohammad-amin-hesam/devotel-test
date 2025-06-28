import { ApprovalStatus, TutorProficiency } from "../data/tutors";
import { Profile } from "./profile";
import { User } from "./user";

export interface Exam {
  name: string;
  score: number;
  date: string;
}

export interface Language {
  id: string;
  name: string;
  faName: string;
}

export interface Level {
  id: string;
  name: string;
  faName: string;
  description: string;
}

export interface Session {
  price: number;
  time: number;
}

export interface TeachingLocation {
  id: string;
  name: string;
  faName: string;
}

export class TutorPendingApproval {
  language?: Language;
  level?: Level;
  session?: Session;
  teachingLocation?: TeachingLocation;
  exams?: Exam[];
  proficiency?: keyof typeof TutorProficiency;
  contractSigned?: boolean;
  isActive?: boolean;
  bio?: string;
  comments?: string[];
  status?: keyof typeof ApprovalStatus;
}

export interface Tutor {
  language: Language;
  slug: string;
  level: Level;
  session: Session;
  teachingLocation: TeachingLocation;
  _id?: string;
  id?: string;
  user: User | string;
  profile: Profile | string;
  images: string[];
  exams: Exam[];
  proficiency: string;
  contractSigned: boolean;
  isActive: boolean;
  bio: string;
  createdAt: string;
  updatedAt: string;
  pendingApproval?: TutorPendingApproval;
  commission?: number;
  students?: string[] | User[];
}

export interface GraphQLTutor extends Tutor {
  id: string;
  profile: Profile;
}
