import { Profile } from "../types/profile";
import {
  Tutor as TestTutor,
  TutorPendingApproval,
} from "../types/tutor";
import { User } from "../types/user";

interface Tutor {
  name: string;
  image: string;
  grade: string;
  lang: string;
  speakType: "native" | "non-native";
  price: number;
  time: number;
  about: string;
  id: string;
}

interface LanguageData {
  list: Tutor[];
  faName: string;
  name: string;
}

interface LanguageCollection {
  [key: string]: LanguageData;
}

export const tutors: LanguageCollection = {
  ترکی: {
    list: [
      {
        id: "1",
        name: "نازنین جامی",
        image: "/images/tutors/sare-izadi.jpg",
        grade: "VIP",
        lang: "ترکی",
        speakType: "native",
        price: 500000,
        time: 60,
        about: `تحصیلات تمام مقاطع از سال اول تا ۱۲ در مدرسه ترکی زبان 
تمام مقاطع از سال اول تا سال ۱۲
تمام مقاطع به زبان ترکی استانبولی درس خونده بنابراین زبان ترکیش خیلی خوبه. ۳-۴ سال سابقه داره در زبان ترکی. استاد VIP ترکی استانبولی`,
      },
    ],
    faName: "ترکی",
    name: "turkish",
  },
  عربی: {
    list: [
      {
        id: "2",
        name: "استاد خزری",
        image: "/images/tutors/khezri.jpg",
        grade: "VIP",
        lang: "عربی",
        speakType: "native",
        price: 500000,
        time: 60,
        about: `استاد خزری دانشگاه تهران لسانس عربی دارند صلاحاتا متوالد نجف هستند استاد نتیب عربی هستند بیش از 20 سال واقع تدریس دارند برای کنکور مکالمه و استاد وی آی پی اندیه`,
      },
    ],
    faName: "عربی",
    name: "arabic",
  },
  انگلیسی: {
    list: [
      {
        id: "3",
        name: "محمد اکبری",
        image: "/images/tutors/mohammad-akbari.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `محمد اکبری استاد 4 ستاره استادبانک می‌باشد که تا به اینجا 1,637 جلسه برگزار کرده است و زبان‌آموزانش از او رضایت خیلی بالایی داشته‌اند. او می‌تواند به صورت حضوری در شهر مشهد و به صورت آنلاین بر بستر اینترنت تدریس کند. این استاد همچنین موفق شده است مدرک دوره اخلاق حرفه‌ای تدریس را از استادبانک دریافت نماید.

استاد محمد اکبری در گروه درسی «زبان های خارجی» تدریس خصوصی می‌کند.`,
      },
      {
        id: "4",
        name: "مرجان اکبری",
        image: "/images/tutors/marjan-akbari.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `دارای پروانه از نظام روانشناسی 
مشاور اختلالات یادگیری در کودکان
بیش از ۵ سال سابقه کار `,
      },
      {
        id: "5",
        name: "الناز صفری",
        image: "/images/tutors/elnaz-safari.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `میزان سابقه کار و زمینه سابقه کار:از سال 1397 تاکنون/مدرس زبان انگلیسی/به صورت کلاس های حضوری و آنلاین`,
      },
      {
        id: "6",
        name: "الهام عطائیان",
        image: "/images/tutors/Elham-ataeian.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `معلم زبان انگلیسی متخصص با  ۲۰
سال تجربه در تدریس زبان انگلیسی به دانش‌آموزان از سطح مبتدی تا پیشرفته. تسلط بر روش‌های تدریس مبتنی بر مهارت‌های چهارگانه: شنیداری، گفتاری، خواندن و نوشتن. 
متعهد به ارائه یک محیط یادگیری دوستانه و متنوع برای دانش‌آموزان.`,
      },
      {
        id: "7",
        name: "ساره ایزدی",
        image: "/images/tutors/sare-izadi.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `معلم زبان انگلیسی متخصص با  کارشناسی ادبیات انگلیسی 
ارشد مترجمی انگلیسی ---
تدریس حدود هشت سال`,
      },
      {
        id: "8",
        name: "زینب میررضایی",
        image: "/images/tutors/zeinab-mirrezaei.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `درحال تحصیل کارشناسی مکانیک 
دانشگاه فردوسی ---
مدرس زبان انگلیسی ۳ سال`,
      },
      {
        id: "9",
        name: "زینب میررضایی",
        image: "/images/tutors/atefeh-mohammad-khani.jpg",
        grade: "VIP",
        lang: "انگلیسی",
        speakType: "non-native",
        price: 500000,
        time: 60,
        about: `۵ سال زبان انگلیسی --- سوابق کاری :

1⃣موسسه کیش نوین 
2⃣موسسه وارستگان 
3⃣مدرسه المهدی`,
      },
    ],
    faName: "انگلیسی",
    name: "english",
  },
};

export const allTutors: Tutor[] = Object.values(tutors).flatMap(
  (tutor) => tutor.list
);

export const countryCodes = [
  { name: "ایران", code: "98" }, // Iran
  { name: "Afghanistan", code: "93" },
  { name: "Shqipëri", code: "355" }, // Albania
  { name: "الجزائر", code: "213" }, // Algeria
  { name: "Andorra", code: "376" },
  { name: "Angola", code: "244" },
  { name: "Antigua and Barbuda", code: "1-268" },
  { name: "Argentina", code: "54" },
  { name: "Հայաստան", code: "374" }, // Armenia
  { name: "Australia", code: "61" },
  { name: "Österreich", code: "43" }, // Austria
  { name: "Azərbaycan", code: "994" }, // Azerbaijan
  { name: "Bahamas", code: "1-242" },
  { name: "البحرين", code: "973" }, // Bahrain
  { name: "Bangladesh", code: "880" },
  { name: "Barbados", code: "1-246" },
  { name: "Беларусь", code: "375" }, // Belarus
  { name: "België", code: "32" }, // Belgium (Dutch)
  { name: "Belgique", code: "32" }, // Belgium (French)
  { name: "Belize", code: "501" },
  { name: "Benin", code: "229" },
  { name: "България", code: "359" }, // Bulgaria
  { name: "Bolivia", code: "591" },
  { name: "Bosna i Hercegovina", code: "387" }, // Bosnia and Herzegovina
  { name: "Botswana", code: "267" },
  { name: "Brasil", code: "55" }, // Brazil
  { name: "Brunei Darussalam", code: "673" },
  { name: "България", code: "359" }, // Bulgaria
  { name: "Burkina Faso", code: "226" },
  { name: "Burundi", code: "257" },
  { name: "Cabo Verde", code: "238" },
  { name: "កម្ពុជា", code: "855" }, // Cambodia
  { name: "Cameroun", code: "237" },
  { name: "Canada", code: "1" },
  { name: "Česko", code: "420" }, // Czech Republic
  { name: "Tsieina", code: "86" }, // China (Welsh version)
  { name: "中国", code: "86" }, // China (Simplified Chinese)
  { name: "Colombia", code: "57" },
  { name: "Comores", code: "269" },
  { name: "Congo (Congo-Brazzaville)", code: "242" },
  { name: "Congo (Congo-Kinshasa)", code: "243" },
  { name: "Costa Rica", code: "506" },
  { name: "Hrvatska", code: "385" }, // Croatia
  { name: "Cuba", code: "53" },
  { name: "Κύπρος", code: "357" }, // Cyprus (Greek)
  { name: "Cyprus", code: "357" }, // Cyprus (English)
  { name: "Česko", code: "420" }, // Czech Republic
  { name: "Danmark", code: "45" }, // Denmark
  { name: "Djibouti", code: "253" },
  { name: "Dominica", code: "1-767" },
  { name: "República Dominicana", code: "1-809" }, // Dominican Republic
  { name: "Ecuador", code: "593" },
  { name: "مصر", code: "20" }, // Egypt
  { name: "El Salvador", code: "503" },
  { name: "Guinea Ecuatorial", code: "240" }, // Equatorial Guinea
  { name: "Eritrea", code: "291" },
  { name: "Eesti", code: "372" }, // Estonia
  { name: "Eswatini", code: "268" },
  { name: "Ethiopia", code: "251" },
  { name: "Fiji", code: "679" },
  { name: "Suomi", code: "358" }, // Finland
  { name: "France", code: "33" },
  { name: "Gabon", code: "241" },
  { name: "Gambia", code: "220" },
  { name: "Georgia", code: "995" },
  { name: "Deutschland", code: "49" }, // Germany
  { name: "Ghana", code: "233" },
  { name: "Ελλάδα", code: "30" }, // Greece
  { name: "Grenada", code: "1-473" },
  { name: "Guatemala", code: "502" },
  { name: "Guinea", code: "224" },
  { name: "Guiné-Bissau", code: "245" }, // Guinea-Bissau
  { name: "Guyana", code: "592" },
  { name: "Honduras", code: "504" },
  { name: "Magyarország", code: "36" }, // Hungary
  { name: "Ísland", code: "354" }, // Iceland
  { name: "भारत", code: "91" }, // India (Hindi)
  { name: "Indonesia", code: "62" },
  { name: "العراق", code: "964" }, // Iraq
  { name: "Éire", code: "353" }, // Ireland (Irish)
  { name: "Ireland", code: "353" }, // Ireland (English)
  { name: "ישראל", code: "972" }, // Israel
  { name: "Italia", code: "39" }, // Italy
  { name: "Jamaica", code: "1-876" },
  { name: "日本", code: "81" }, // Japan
  { name: "الأردن", code: "962" }, // Jordan
  { name: "Қазақстан", code: "7" }, // Kazakhstan
  { name: "Kenya", code: "254" },
  { name: "Kiribati", code: "686" },
  { name: "Косово", code: "383" }, // Kosovo
  { name: "الكويت", code: "965" }, // Kuwait
  { name: "Кыргызстан", code: "996" }, // Kyrgyzstan
  { name: "ລາວ", code: "856" }, // Laos
  { name: "Latvija", code: "371" }, // Latvia
  { name: "لبنان", code: "961" }, // Lebanon
  { name: "Lesotho", code: "266" },
  { name: "Liberia", code: "231" },
  { name: "ليبيا", code: "218" }, // Libya
  { name: "Liechtenstein", code: "423" },
  { name: "Lietuva", code: "370" }, // Lithuania
  { name: "Luxembourg", code: "352" },
  { name: "Madagasikara", code: "261" }, // Madagascar
  { name: "Malawi", code: "265" },
  { name: "Malaysia", code: "60" },
  { name: "Maldives", code: "960" },
  { name: "Mali", code: "223" },
  { name: "Malta", code: "356" },
  { name: "جزائر", code: "222" }, // Mauritania
  { name: "Mauritius", code: "230" },
  { name: "México", code: "52" },
  { name: "Молдова", code: "373" }, // Moldova
  { name: "Монгол", code: "976" }, // Mongolia
  { name: "Черна Гора", code: "382" }, // Montenegro
  { name: "المغرب", code: "212" }, // Morocco
  { name: "Moçambique", code: "258" }, // Mozambique
  { name: "Myanmar", code: "95" },
  { name: "Namibia", code: "264" },
  { name: "Nauru", code: "674" },
  { name: "Nepal", code: "977" },
  { name: "Nederland", code: "31" }, // Netherlands
  { name: "Nouvelle-Calédonie", code: "687" }, // New Caledonia
  { name: "New Zealand", code: "64" },
  { name: "Nicaragua", code: "505" },
  { name: "Niger", code: "227" },
  { name: "Nigeria", code: "234" },
  { name: "Korea (조선민주주의인민공화국)", code: "850" }, // North Korea
  { name: "Norway", code: "47" },
  { name: "عمان", code: "968" }, // Oman
  { name: "پاکستان", code: "92" }, // Pakistan
  { name: "Palau", code: "680" },
  { name: "Panamá", code: "507" }, // Panama
  { name: "Papua New Guinea", code: "675" },
  { name: "Paraguay", code: "595" },
  { name: "Perú", code: "51" }, // Peru
  { name: "Philippines", code: "63" },
  { name: "Polska", code: "48" }, // Poland
  { name: "Portugal", code: "351" },
  { name: "قطر", code: "974" }, // Qatar
  { name: "România", code: "40" }, // Romania
  { name: "Россия", code: "7" }, // Russia
  { name: "رواندا", code: "250" }, // Rwanda
  { name: "Samoa", code: "685" },
  { name: "San Marino", code: "378" },
  { name: "São Tomé e Príncipe", code: "239" },
  { name: "المملكة العربية السعودية", code: "966" }, // Saudi Arabia
  { name: "Sénégal", code: "221" },
  { name: "Србија", code: "381" }, // Serbia
  { name: "Seychelles", code: "248" },
  { name: "Sierra Leone", code: "232" },
  { name: "Singapore", code: "65" },
  { name: "Slovensko", code: "421" }, // Slovakia
  { name: "Slovenija", code: "386" }, // Slovenia
  { name: "Solomon Islands", code: "677" },
  { name: "الصومال", code: "252" }, // Somalia
  { name: "South Africa", code: "27" },
  { name: "대한민국", code: "82" }, // South Korea
  { name: "España", code: "34" }, // Spain
  { name: "سودان", code: "249" }, // Sudan
  { name: "Suriname", code: "597" },
  { name: "Sweden", code: "46" },
  { name: "Schweiz", code: "41" }, // Switzerland (German)
  { name: "Suisse", code: "41" }, // Switzerland (French)
  { name: "Siria", code: "963" },
  { name: "Taiwan", code: "886" },
  { name: "Таджикистан", code: "992" }, // Tajikistan
  { name: "Tanzania", code: "255" },
  { name: "ประเทศไทย", code: "66" }, // Thailand
  { name: "Timor-Leste", code: "670" },
  { name: "Togo", code: "228" },
  { name: "Tonga", code: "676" },
  { name: "Trinidad and Tobago", code: "1-868" },
  { name: "تونس", code: "216" }, // Tunisia
  { name: "Türkiye", code: "90" }, // Turkey
  { name: "Türkmenistan", code: "993" }, // Turkmenistan
  { name: "Tuvalu", code: "688" },
  { name: "Uganda", code: "256" },
  { name: "Україна", code: "380" }, // Ukraine
  { name: "United Arab Emirates", code: "971" },
  { name: "United Kingdom", code: "44" },
  { name: "United States", code: "1" },
  { name: "Uruguay", code: "598" },
  { name: "Oʻzbekiston", code: "998" }, // Uzbekistan
  { name: "Vanuatu", code: "678" },
  { name: "Venezuela", code: "58" },
  { name: "Việt Nam", code: "84" }, // Vietnam
  { name: "اليمن", code: "967" }, // Yemen
  { name: "Zambia", code: "260" },
  { name: "Zimbabwe", code: "263" },
];

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

export const testTutors: TestTutor[] = Array.from({ length: 20 }).map(
  (_mockItem, mockIndex) => ({
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
    images: [],
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
