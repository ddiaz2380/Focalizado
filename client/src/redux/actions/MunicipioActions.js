import actionsFunction from "./generated/MunicipioActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MunicipioApi from "../../api/MunicipioApi";
 
 actionsFunction.loadMunicipioList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MunicipioApi
     .getMunicipioList()
     .then(list => {
       dispatch(actionsFunction.loadMunicipioSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
