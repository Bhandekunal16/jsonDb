class Response {
  constructor() {
    this.Error = "Internal Server Error";
    this.NotFound = "not found";
    this.Created = "successfully created";
    this.Success = "success";
    this.BadRequest = "bad request";
    this.Forbidden = "forbidden";
    this.BadGateway = "bad gateway";
    this.ServiceUnavailable = "service unavailable";
  }

  // message, process

  error(res, message, process) {
    process != undefined ? process.status(500) : null;
    const msg = message != undefined ? this.Error : message;
    return {
      response: res,
      statusCode: 500,
      status: false,
      msg: msg,
    };
  }

  notFound(res, message, process) {
    process != undefined ? process.status(404) : null;
    const msg = message != undefined ? this.NotFound : message;
    return {
      response: res,
      statusCode: 404,
      status: false,
      msg: msg,
    };
  }

  badRequest(res, message, process) {
    process != undefined ? process.status(400) : null;
    const msg = message != undefined ? this.BadRequest : message;
    return {
      response: res,
      statusCode: 400,
      status: false,
      msg: msg,
    };
  }

  badGateway(res, message, process) {
    process != undefined ? process.status(502) : null;
    const msg = message != undefined ? this.BadGateway : message;
    return {
      response: res,
      statusCode: 502,
      status: false,
      msg: msg,
    };
  }

  forbidden(res, message, process) {
    process != undefined ? process.status(401) : null;
    const msg = message != undefined ? this.Forbidden : message;
    return {
      response: res,
      statusCode: 401,
      status: false,
      msg: msg,
    };
  }

  serviceUnavailable(res, message, process) {
    process != undefined ? process.status(503) : null;
    const msg = message != undefined ? this.ServiceUnavailable : message;
    return {
      response: res,
      statusCode: 503,
      status: false,
      msg: msg,
    };
  }

  created(res, message) {
    const msg = message != undefined ? this.Created : message;
    return { data: res, statusCode: 201, status: true, msg: msg };
  }

  success(res, message) {
    const msg = message != undefined ? this.Success : message;
    return { data: res, statusCode: 200, status: true, msg: msg };
  }
}

module.exports = Response;
