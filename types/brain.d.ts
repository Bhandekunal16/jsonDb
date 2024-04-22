export = Brain;
declare class Brain {
    write(input: any, collection: any): any;
    read(collection: any): any;
    getById(id: any, collection: any): {
        records: {};
        timestamp: Date;
    };
    getByProperties(Object: any, collection: any): any;
    edit(id: any, input: any, value: any, collection: any): void;
    props(id: any, newObj: any, collection: any): void;
    count(collection: any): {
        recordCount: any;
    };
}
