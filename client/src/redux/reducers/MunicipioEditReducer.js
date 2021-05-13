// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  municipio: {}
};

// Reducer
export default function MunicipioEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MUNICIPIO_SUCCESS:
      return { ...state, municipio: action.payload };
    case types.UPDATE_MUNICIPIO_SUCCESS:
      return { ...state, municipio: action.payload };
    case types.GET_MUNICIPIO_SUCCESS:
      return { ...state, municipio: action.payload };
    case types.LIST_DEPARTAMENTO_SUCCESS:
      return { ...state, listDepartamento: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}