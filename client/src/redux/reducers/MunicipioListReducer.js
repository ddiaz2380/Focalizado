// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function MunicipioListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MUNICIPIO_SUCCESS:
      return { ...state, municipio: action.payload };
    case types.LIST_MUNICIPIO_SUCCESS:
      return { ...state, listMunicipio: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}