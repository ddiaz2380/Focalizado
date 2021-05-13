import { combineReducers } from "redux";

// START IMPORT REDUCERS
import DepartamentoEditReducer from "./DepartamentoEditReducer";
import DepartamentoListReducer from "./DepartamentoListReducer";
import HomeReducer from "./HomeReducer";
import MunicipioEditReducer from "./MunicipioEditReducer";
import MunicipioListReducer from "./MunicipioListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	DepartamentoEditReducer,
	DepartamentoListReducer,
	HomeReducer,
	MunicipioEditReducer,
	MunicipioListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
