export = Brain;
declare class Brain {
  write(input: any, collection: string): any;
  read(collection: string): any;
  getById(
    id: string,
    collection: string
  ): {
    records: {};
    timestamp: Date;
  };
  getByProperties(Object: any, collection: string): any;
  edit(id: string, input: string, value: string, collection: string): void;
  props(id: string, newObj: any, collection: string): void;
  count(collection: string): {
    recordCount: any;
  };
}
