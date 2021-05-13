import actionsFunction from "./generated/DepartamentoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DepartamentoApi from "../../api/DepartamentoApi";
 
 actionsFunction.loadDepartamentoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DepartamentoApi
     .getDepartamentoList()
     .then(list => {
       dispatch(actionsFunction.loadDepartamentoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
