import DepartamentoApiGenerated from "./generated/DepartamentoApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DepartamentoApi extends DepartamentoApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Departamento List
  static getDepartamentoList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/departamentos")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DepartamentoApi;