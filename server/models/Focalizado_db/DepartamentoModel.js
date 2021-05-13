import DepartamentoModelGenerated from "./generated/DepartamentoModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await DepartamentoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DepartamentoModelGenerated,
  ...customModel
};
