export = Response;
declare class Response {
    Error: string;
    NotFound: string;
    Created: string;
    Success: string;
    BadRequest: string;
    Forbidden: string;
    BadGateway: string;
    ServiceUnavailable: string;
    error(res: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    notFound(res: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    badRequest(res: any, process: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    badGateway(res: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    forbidden(res: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    serviceUnavailable(res: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    created(res: any): {
        data: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
    success(res: any): {
        data: any;
        statusCode: number;
        status: boolean;
        msg: string;
    };
}
