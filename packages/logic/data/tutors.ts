import { Profile } from "../types/profile";

export enum ExamName {
  IELTS = "IELTS",
  TOFEL = "TOFEL",
  Dulingo = "Dulingo",
  GRE = "GRE",
  PTE = "PTE",
  EPT = "EPT",
  MSRT = "MSRT",
  MCHE = "MCHE",
  // Chinese
  HSK = "HSK",
  BCT = "BCT",
  MCT = "MCT",
  YCT = "YCT",
  // France
  DELF = "DELF",
  DALF = "DALF",
  TCF = "TCF",
  // Turkish
  Tömer = "Tömer",
}

export const exams = [
  "IELTS",
  "TOFEL",
  "Dulingo",
  "GRE",
  "PTE",
  "EPT",
  "MSRT",
  "MCHE",
  "HSK",
  "BCT",
  "MCT",
  "YCT",
];

export interface TutorSession {
  price: number;
  time: number;
}

export enum TutorProficiency {
  native = "native",
  advanced = "advanced",
}

export enum Status {
  adminPending = "adminPending",
  studentPending = "studentPending",
  userPending = "userPending",
  tutorPending = "tutorPending",
  inProgress = "inProgress",
  approved = "approved",
  rejected = "rejected",
  off = "off",
  on = "on",
}

export enum ApprovalStatus {
  adminPending = "adminPending",
  userPending = "userPending",
}

export const proficiencies = {
  1: { id: 1, name: TutorProficiency.advanced, faName: "پیشرفته" },
  2: { id: 2, name: TutorProficiency.native, faName: "بومی" },
};

export const times = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

export const teachingLocations = {
  1: { id: "1", name: "online", faName: "آنلاین" },
  2: { id: "2", name: "in-person", faName: "حضوری" },
  3: { id: "3", name: "both", faName: "هر دو" },
};

export const levels = {
  1: {
    id: 1,
    name: "normal",
    faName: "عادی",
    description: "توضیحات در مورد استاد عادی",
  },
  2: {
    id: 2,
    name: "special",
    faName: "ویژه",
    description: "توضیحات در مورد استاد ویژه",
  },
  3: {
    id: 3,
    name: "professional",
    faName: "VIP",
    description: "توضیحات در مورد استاد VPI",
  },
};

export const languages = {
  1: { id: 1, name: "English", faName: "انگلیسی" },
  3: { id: 3, name: "Français", faName: "فرانسوی" },
  4: { id: 4, name: "Türkçe", faName: "ترکی" },
  5: { id: 5, name: "العربية", faName: "عربی" },
  6: { id: 6, name: "Deutsch", faName: "آلمانی" },
  7: { id: 7, name: "한국인", faName: "کره ای" },
  8: { id: 8, name: "中文", faName: "چینی" },
  9: { id: 9, name: "日本語", faName: "ژاپنی" },
  10: { id: 10, name: "Русский", faName: "روسی" },
  11: { id: 11, name: "Italiano", faName: "ایتالیایی" },
  12: { id: 12, name: "Español", faName: "اسپانیایی" },
  13: { id: 13, name: "Português", faName: "پرتغالی" },
  14: { id: 14, name: "portugisiska", faName: "سوئدی" },
};

export interface TutorToPost {
  tutorId?: string;
  bio: string;
  exams: {
    name: string;
    score: number;
    date: string;
  }[];
  images?: string[];
  language: string;
  level?: string;
  teachingLocation: string;
  session?: {
    price: number;
    time: number;
  };
  proficiency: string;
  contractSigned: boolean;
  isActive: boolean;
}

export interface CreateTutorParams {
  userId?: string;
  profile: Partial<Profile>;
  tutor: TutorToPost;
}
