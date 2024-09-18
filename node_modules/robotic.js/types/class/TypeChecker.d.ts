export = TypeChecker;
declare class TypeChecker {
    checkNumber(value: any): boolean;
    checkString(value: any): boolean;
    checkBoolean(value: any): boolean;
}
