export = File;
declare class File {
    constructor(file: any);
    filePath: string;
    file: any;
    size(): string;
    name(): string;
    location(): string;
    type(): string;
    contain(): Promise<string>;
}
