// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function DepartamentoListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DEPARTAMENTO_SUCCESS:
      return { ...state, departamento: action.payload };
    case types.LIST_DEPARTAMENTO_SUCCESS:
      return { ...state, listDepartamento: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}