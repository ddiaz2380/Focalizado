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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import MunicipioActions from "../redux/actions/MunicipioActions";
import DepartamentoActions from "../redux/actions/DepartamentoActions";

// END IMPORT ACTIONS

/** APIs

* actionsMunicipio.create
*	@description CRUD ACTION create
*
* actionsMunicipio.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsMunicipio.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDepartamento.list
*	@description CRUD ACTION list
*

**/

class MunicipioEdit extends Component {
  // Init municipio
  constructor(props) {
    super(props);
    this.state = {
      municipio: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMunicipio.loadMunicipio(this.props.match.params.id);
    }
    
    this.props.actionsDepartamento.loadDepartamentoList();
  }

  // Insert props municipio in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      municipio: props.municipio
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.municipio._id) {
      this.props.actionsMunicipio.saveMunicipio(this.state.municipio).then(data => {
        this.props.history.push("/municipios/");
      });
    } else {
      this.props.actionsMunicipio.createMunicipio(this.state.municipio).then(data => {
        this.props.history.push("/municipios/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Municipio Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Departamento"
            label="Departamento"
            value={this.state.municipio.Departamento || ""}
            onChange={Utils.handleChange.bind(this, "municipio")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.municipio.Departamento && this.state.municipio.Departamento === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Descripcion"
            label="Descripcion"
            value={this.state.municipio.Descripcion || ""}
            onChange={Utils.handleChange.bind(this, "municipio")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Municipio"
            label="Municipio"
            value={this.state.municipio.Municipio || ""}
            onChange={Utils.handleChange.bind(this, "municipio")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.municipio.Municipio && this.state.municipio.Municipio === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m Departamento with Departamento */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="Departamento">Departamento</InputLabel>
            <Select
              multiple
              value={this.state.municipio.Departamento || []}
              onChange={Utils.handleChangeSelect.bind(this, "municipio")}
              input={<Input id="Departamento" name="Departamento" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listDepartamento && this.props.listDepartamento.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.municipio.Departamento &&
                      this.state.municipio.Departamento.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/municipios/">Back to list</Link>

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
    actionsMunicipio: bindActionCreators(MunicipioActions, dispatch),
    actionsDepartamento: bindActionCreators(DepartamentoActions, dispatch),
  };
};

// Validate types
MunicipioEdit.propTypes = { 
  actionsMunicipio: PropTypes.object.isRequired,
  actionsDepartamento: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    municipio: state.MunicipioEditReducer.municipio,
    listDepartamento: state.MunicipioEditReducer.listDepartamento
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MunicipioEdit);
