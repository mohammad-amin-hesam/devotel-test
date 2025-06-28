export declare const countryCodes: {
    name: string;
    code: string;
}[];
interface Tutor {
    name: string;
    image: string;
    grade: string;
    lang: string;
    speakType: "native" | "non-native";
    price: number;
    time: number;
    about: string;
    id: number;
}
interface LanguageData {
    list: Tutor[];
    faName: string;
    name: string;
}
interface LanguageCollection {
    [key: string]: LanguageData;
}
export declare const tutors: LanguageCollection;
export declare const allTutors: Tutor[];
export {};
//# sourceMappingURL=index.d.ts.map