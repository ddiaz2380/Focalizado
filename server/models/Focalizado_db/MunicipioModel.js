import MunicipioModelGenerated from "./generated/MunicipioModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await MunicipioModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MunicipioModelGenerated,
  ...customModel
};
