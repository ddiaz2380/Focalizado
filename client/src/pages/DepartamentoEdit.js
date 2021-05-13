// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import DepartamentoActions from "../redux/actions/DepartamentoActions";
import MunicipioActions from "../redux/actions/MunicipioActions";

// END IMPORT ACTIONS

/** APIs

* actionsDepartamento.create
*	@description CRUD ACTION create
*
* actionsDepartamento.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDepartamento.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsMunicipio.findByDepartamento
*	@description CRUD ACTION findByDepartamento
*	@param Objectid key - Id of model to search for
*

**/

class DepartamentoEdit extends Component {
  // Init departamento
  constructor(props) {
    super(props);
    this.state = {
      departamento: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDepartamento.loadDepartamento(this.props.match.params.id);
      this.props.actionsMunicipio.findByDepartamento(this.props.match.params.id);
    }
    
  }

  // Insert props departamento in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      departamento: props.departamento
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.departamento._id) {
      this.props.actionsDepartamento.saveDepartamento(this.state.departamento).then(data => {
        this.props.history.push("/departamentos/");
      });
    } else {
      this.props.actionsDepartamento.createDepartamento(this.state.departamento).then(data => {
        this.props.history.push("/departamentos/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Departamento Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Departamento"
            label="Departamento"
            value={this.state.departamento.Departamento || ""}
            onChange={Utils.handleChange.bind(this, "departamento")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.departamento.Departamento && this.state.departamento.Departamento === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Descripcion"
            label="Descripcion"
            value={this.state.departamento.Descripcion || ""}
            onChange={Utils.handleChange.bind(this, "departamento")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Municipio */}
          
          <h3>Municipio</h3>
          {(!this.props.listMunicipio || this.props.listMunicipio.length === 0) && 
            <div>No Municipio associated</div>
          }
          {this.props.listMunicipio &&
            this.props.listMunicipio.map((item, i) => {
              return (
                <Link to={"/municipios/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/departamentos/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDepartamento: bindActionCreators(DepartamentoActions, dispatch),
    actionsMunicipio: bindActionCreators(MunicipioActions, dispatch),
  };
};

// Validate types
DepartamentoEdit.propTypes = { 
  actionsDepartamento: PropTypes.object.isRequired,
  actionsMunicipio: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    departamento: state.DepartamentoEditReducer.departamento,
    listMunicipio: state.DepartamentoEditReducer.listMunicipio
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartamentoEdit);
