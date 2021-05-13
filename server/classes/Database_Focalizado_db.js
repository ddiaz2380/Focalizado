// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_Focalizado_db";
import UserModel from "../models/Focalizado_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.Focalizado_db.host +
        ":" +
        properties.Focalizado_db.port +
        "//" +
        properties.Focalizado_db.user +
        "@" +
        properties.Focalizado_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.Focalizado_db.name,
      properties.Focalizado_db.user,
      properties.Focalizado_db.password,
      {
        host: properties.Focalizado_db.host,
        dialect: properties.Focalizado_db.dialect,
        port: properties.Focalizado_db.port,
        logging: false
      }
    );
    this.dbConnection_Focalizado_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Focalizado_db;
  }
}

export default new Database();
