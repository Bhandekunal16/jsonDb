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
    error(res: any, message?: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    notFound(res: any, message?: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    badRequest(res: any, message?: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    badGateway(res: any, message?: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    forbidden(res: any, message?: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    serviceUnavailable(res: any, message?: any, process?: any): {
        response: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    created(res: any, message?: any): {
        data: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
    success(res: any, message?: any): {
        data: any;
        statusCode: number;
        status: boolean;
        msg: any;
    };
}
