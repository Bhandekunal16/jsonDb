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

  error(res, process) {
    process != undefined ? process.status(500) : null;
    return {
      response: res,
      statusCode: 500,
      status: false,
      msg: this.Error,
    };
  }

  notFound(res, process) {
    process != undefined ? process.status(404) : null;
    return {
      response: res,
      statusCode: 404,
      status: false,
      msg: this.NotFound,
    };
  }

  badRequest(res, process) {
    process != undefined ? process.status(400) : null;
    return {
      response: res,
      statusCode: 400,
      status: false,
      msg: this.BadRequest,
    };
  }

  badGateway(res, process) {
    process != undefined ? process.status(502) : null;
    return {
      response: res,
      statusCode: 502,
      status: false,
      msg: this.BadGateway,
    };
  }

  forbidden(res, process) {
    process != undefined ? process.status(401) : null;
    return {
      response: res,
      statusCode: 401,
      status: false,
      msg: this.Forbidden,
    };
  }

  serviceUnavailable(res, process) {
    process != undefined ? process.status(503) : null;
    return {
      response: res,
      statusCode: 503,
      status: false,
      msg: this.ServiceUnavailable,
    };
  }

  created(res) {
    return { data: res, statusCode: 201, status: true, msg: this.Created };
  }

  success(res) {
    return { data: res, statusCode: 200, status: true, msg: this.Success };
  }
}

module.exports = Response;
