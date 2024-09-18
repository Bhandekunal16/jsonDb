export = Brain;
declare class Brain {
    write(input: any, collection: any): any;
    read(collection: any): any;
    getById(id: any, collection: any): {
        records: any;
        timestamp: Date;
    };
    getByProperties(Object: any, collection: any): any;
    edit(id: any, input: any, value: any, collection: any): any;
    props(id: any, newObj: any, collection: any): void;
    count(collection: any): {
        recordCount: any;
    };
    unwind(array: any, collection: any): Promise<void>;
    ImportCsv(path: any, collection: any): void;
    ExportCsv(collection: any): void;
    truncate(collection: any): Error;
    delete(collection: any, id: any): Error;
}
