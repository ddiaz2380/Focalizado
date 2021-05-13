import MunicipioApiGenerated from "./generated/MunicipioApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class MunicipioApi extends MunicipioApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Municipio List
  static getMunicipioList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/municipios")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default MunicipioApi;