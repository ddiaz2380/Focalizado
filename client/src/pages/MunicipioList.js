// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import MunicipioActions from "../redux/actions/MunicipioActions";

// END IMPORT ACTIONS

/** APIs

* actionsMunicipio.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsMunicipio.list
*	@description CRUD ACTION list
*

**/


class MunicipioList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsMunicipio.loadMunicipioList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsMunicipio.deleteMunicipio(this.state.idDelete).then(data => {
      this.props.actionsMunicipio.loadMunicipioList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Departamento",
        type: "number",
        label: "Departamento"
      }, 
      {
        id: "Descripcion",
        type: "string",
        label: "Descripcion"
      }, 
      {
        id: "Municipio",
        type: "string",
        label: "Municipio"
      },
    ];
    const link = "/municipios/";

    return (
      <div>
        <h1>Municipio List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Departamento</TableCell>
              <TableCell align="right">Descripcion</TableCell>
              <TableCell align="right">Municipio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/municipios/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Departamento }</TableCell>
                <TableCell align="right">{ row.Descripcion }</TableCell>
                <TableCell align="right">{ row.Municipio }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/municipios/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsMunicipio: bindActionCreators(MunicipioActions, dispatch),
  };
};

// Validate types
MunicipioList.propTypes = { 
  actionsMunicipio: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.MunicipioListReducer.listMunicipio
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MunicipioList);
