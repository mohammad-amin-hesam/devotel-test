import { Profile } from "@repo/logic/types/profile";
import { Tutor, TutorPendingApproval } from "@repo/logic/types/tutor";
import { User } from "@repo/logic/types/user";

export const testUser: User = {
  _id: "TEST_ID",
  profile: {
    _id: "TEST_PROFILE_ID",
    address: "Test-address",
    bio: "bio",
    birthDate: "birthDate",
    birthPlace: "birthPlace",
    city: "test-city",
    createdAt: "createdAt",
    firstName: "test-firstname",
    gender: "Female",
    image: "test-image",
    lastName: "lastName",
    nationalCode: "nationalCode",
    province: "province",
    updatedAt: "updatedAt",
    user: "user",
  },
  code: 98,
  createdAt: "createAt",
  mobile: 991423423,
  role: "Role",
  tutors: ["Tutor_id"],
  updatedAt: "updatedAt",
};

export const testPendingApproval: TutorPendingApproval = {
  bio: "TEST_PAP_BIO",
  comments: ["PAP_COMMENT_1", "PAP_COMMENT_2"],
  contractSigned: false,
  exams: [{ name: "IELTS", date: "1403-03-10", score: 1 }],
  isActive: false,
  language: { id: "1", name: "English", faName: "انگلیسی" },
  level: {
    id: "1",
    name: "normal",
    faName: "عادی",
    description: "توضیحات در مورد استاد عادی",
  },
  proficiency: "native",
  session: { price: 50000, time: 60 },
  status: "adminPending",
  teachingLocation: { id: "1", name: "online", faName: "آنلاین" },
};

export const testTutors: Tutor[] = Array.from({ length: 20 }).map(
  (_mockItem, mockIndex) => ({
    images: [],
    slug: "test-slug",
    language: {
      id: "1",
      name: "English",
      faName: "انگلیسی",
    },
    level: {
      id: "1",
      name: "normal",
      faName: "عادی",
      description: "توضیحات در مورد استاد عادی",
    },
    session: {
      price: 500000,
      time: 60,
    },
    teachingLocation: {
      id: "1",
      name: "online",
      faName: "آنلاین",
    },
    isActive: false,
    _id: `679baf63cc01c873ad1b5110${mockIndex}`,
    id: `679baf63cc01c873ad1b5110${mockIndex}`,
    user: "679b97f57acbe7cf440921f6",
    profile: "679b9925ad5215ae588ed49f",
    exams: [
      {
        name: "IELTS",
        score: 8,
        date: "1404/02/10",
      },
    ],
    proficiency: "native",
    contractSigned: true,
    bio: ` Experienced tutor-${mockIndex}`,
    createdAt: "2025-01-30T16:57:07.306Z",
    updatedAt: "2025-01-30T16:57:07.306Z",
  })
);

export const testProfile: Profile = {
  foreignCode: "",
  _id: "67a91188ad5215ae588fec63",
  user: {
    _id: "679b97f57acbe7cf440921f6",
    code: 98,
    mobile: 9913574387,
    role: "admin",
    profile: {
      _id: "TEST_PROFILE_ID",
      address: "Test-address",
      bio: "bio",
      birthDate: "birthDate",
      birthPlace: "birthPlace",
      city: "test-city",
      createdAt: "createdAt",
      firstName: "test-firstname",
      gender: "Female",
      image: "test-image",
      lastName: "lastName",
      nationalCode: "nationalCode",
      province: "province",
      updatedAt: "updatedAt",
      user: "user",
    },
    tutors: testTutors,
    createdAt: "2025-01-30T15:17:09.047Z",
    updatedAt: "2025-03-14T15:56:08.399Z",
  },
  address: "مشهد - آب و برق",
  bio: "TESTESTESTSETES",
  birthDate: "1378-06-30",
  birthPlace: "تهران",
  city: "تهران",
  createdAt: "2025-02-09T20:35:20.437Z",
  firstName: "Amin",
  gender: "Male",
  image: "6c9d4461-1938-4d47-bd44-ccd13aa40f21-cropped-image.png",
  lastName: "Hesam",
  nationalCode: "0924983991",
  province: "خراسان رضوی",
  updatedAt: "2025-03-14T15:34:56.328Z",
};
