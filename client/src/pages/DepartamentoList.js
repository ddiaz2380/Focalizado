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
import DepartamentoActions from "../redux/actions/DepartamentoActions";

// END IMPORT ACTIONS

/** APIs

* actionsDepartamento.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsDepartamento.list
*	@description CRUD ACTION list
*

**/


class DepartamentoList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsDepartamento.loadDepartamentoList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsDepartamento.deleteDepartamento(this.state.idDelete).then(data => {
      this.props.actionsDepartamento.loadDepartamentoList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Departamento",
        type: "string",
        label: "Departamento"
      }, 
      {
        id: "Descripcion",
        type: "string",
        label: "Descripcion"
      },
    ];
    const link = "/departamentos/";

    return (
      <div>
        <h1>Departamento List</h1>

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
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/departamentos/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Departamento }</TableCell>
                <TableCell align="right">{ row.Descripcion }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/departamentos/new">
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
    actionsDepartamento: bindActionCreators(DepartamentoActions, dispatch),
  };
};

// Validate types
DepartamentoList.propTypes = { 
  actionsDepartamento: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.DepartamentoListReducer.listDepartamento
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartamentoList);
