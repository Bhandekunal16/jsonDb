const NestController = require("./nest.controller");
const NestService = require("./nest.service");
const NestRepository = require("./nest.repository");
const NestModule = require("./nest.module");
const NestDtoCreate = require("./Nest-create-dto");
const controller = new NestController();
const service = new NestService();
const repository = new NestRepository();
const create = new NestDtoCreate();
const Module = new NestModule();

/**Class representing module file for creation of folder structure like nest.js operations.*/
class Nest {
  /**
   * @function create a dummy nest module
   * @param {string} name - The name of the folder and all of each file.
   * @returns {string|undefined} The name of the created file's or undefined if there's an error.
   */
  async create(name) {
    const value = name.split(".")[0];

    Promise.all[
      (controller.create(value),
      service.create(value),
      repository.create(value),
      Module.create(value),
      create.create(value))
    ];
  }

  /**
   * @function export array of the service Name's imported in module
   * @returns {Array|undefined} Array of the service Name's imported in module.
   */
  out() {
    const route = [
      NestController,
      NestService,
      NestRepository,
      NestDtoCreate,
      NestModule,
    ];
    const imports = route.map((elements) => elements.name);

    return imports;
  }
}

module.exports = Nest;
