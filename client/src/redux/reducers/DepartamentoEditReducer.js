// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  departamento: {}
};

// Reducer
export default function DepartamentoEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DEPARTAMENTO_SUCCESS:
      return { ...state, departamento: action.payload };
    case types.UPDATE_DEPARTAMENTO_SUCCESS:
      return { ...state, departamento: action.payload };
    case types.GET_DEPARTAMENTO_SUCCESS:
      return { ...state, departamento: action.payload };
    case types.FINDBYDEPARTAMENTO_MUNICIPIO_SUCCESS:
      return { ...state, listMunicipio: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}