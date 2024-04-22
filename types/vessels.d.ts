export = Vessel;
declare class Vessel {
    fileName: string;
    write(input: any, collection: any): any;
    preCreate(collection: any): any;
    read(collection: any): any;
}
