export = DataGenerator;
/**class that contain methods that generate random data*/
declare class DataGenerator {
    consonants: string[];
    ovals: string[];
    emails: string[];
    /**
     * @function - generate various type of data like name || mobile number || email
     * @param {number} length - how many data you want to generate.
     * @param {string} type - name || mobileNo || email.
     * @returns {string[]} generate array that contain dummy data.
     */
    create(length: number, type: string): string[];
    /**
     * @function - generate various random mobile Number
     * @param {number} length - how many data you want to generate.
     * @returns {string[]} generate array that contain dummy data.*/
    generateMobileNumber(length: number): string[];
    /**
     * @function - generate various random name
     * @param {number} length - how many data you want to generate.
     * @returns {string[]} generate array that contain dummy data.*/
    generateRandomName(length: number): string[];
    /**
     * @function - generate various random email
     * @param {number} length - how many data you want to generate.
     * @returns {string[]} generate array that contain dummy data.*/
    generateRandomEmail(length: number): string[];
    /**
     * @function - captcha generating operations
     * @return - eight digit random captcha code.*/
    captcha(): string;
}
