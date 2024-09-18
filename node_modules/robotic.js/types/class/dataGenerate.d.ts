export = DataGenerator;
declare class DataGenerator {
    consonants: string[];
    ovals: string[];
    emails: string[];
    create(length: number, type: string): string[];
    generateMobileNumber(length: number): string[];
    generateRandomName(length: number): string[];
    generateRandomEmail(length: number): string[];
    captcha(): string;
}
