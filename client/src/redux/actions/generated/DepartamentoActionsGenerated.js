/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN DepartamentoActionsGenerated.js PLEASE EDIT ../DepartamentoActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import DepartamentoApi from "../../../api/DepartamentoApi";

let actionsFunction = {

  //CRUD METHODS

  // Create departamento
  createDepartamento: function(departamento) {
    return function(dispatch) {
      return DepartamentoApi
        .createDepartamento(departamento)
        .then(departamento => {
          dispatch(actionsFunction.createDepartamentoSuccess(departamento));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createDepartamentoSuccess: function(departamento) {
    return { type: types.CREATE_DEPARTAMENTO_SUCCESS, payload: departamento };
  },


  // Delete departamento
  deleteDepartamento: function(id) {
    return function(dispatch) {
      return DepartamentoApi
        .deleteDepartamento(id)
        .then(departamento => {
          dispatch(actionsFunction.deleteDepartamentoSuccess(departamento));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteDepartamentoSuccess: function(departamento) {
    return { type: types.DELETE_DEPARTAMENTO_SUCCESS, payload: departamento };
  },


  // Get departamento
  loadDepartamento: function(id) {
    return function(dispatch) {
      return DepartamentoApi
        .getOneDepartamento(id)
        .then(departamento => {
          dispatch(actionsFunction.loadDepartamentoSuccess(departamento));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDepartamentoSuccess: function(departamento) {
    return { type: types.GET_DEPARTAMENTO_SUCCESS, payload: departamento };
  },

  // Load  list
  loadDepartamentoList: function() {
    return function(dispatch) {
      return DepartamentoApi
        .getDepartamentoList()
        .then(list => {
          dispatch(actionsFunction.loadDepartamentoListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDepartamentoListSuccess: function(list) {
    return { type: types.LIST_DEPARTAMENTO_SUCCESS, payload: list };
  },

	
  // Save departamento
  saveDepartamento: function(departamento) {
    return function(dispatch) {
      return DepartamentoApi
        .saveDepartamento(departamento)
        .then(departamento => {
          dispatch(actionsFunction.saveDepartamentoSuccess(departamento));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveDepartamentoSuccess: function(departamento) {
    return { type: types.UPDATE_DEPARTAMENTO_SUCCESS, payload: departamento };
  },


};

export default actionsFunction;
