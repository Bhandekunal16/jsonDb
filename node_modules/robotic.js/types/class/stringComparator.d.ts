export = StringComparator;
declare class StringComparator {
    isEmail(value: string): boolean;
    isMobile(value: any): boolean;
    isName(value: string): boolean;
    isPinCode(value: any): boolean;
    isUnique(value: any): boolean;
    isAlphanumeric(value: string): boolean;
    IsStrongPassword(value: string): boolean;
    isURL(value: string): boolean;
    IsIPAddress(value: string): boolean;
    IsHexadecimal(value: string): boolean;
}
