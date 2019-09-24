import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployee } from "../../actions";

const deleteEmployeeRecord = ({ deleteEmployee, match }) => {
  deleteEmployee(match.params.id);
};

const EmployeeDelete = props => {
  const style = {
    display: "block",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  };

  return (
    <div className="modal" style={style}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Employee</h5>
            <Link to="/" className="close">
              <span>&times;</span>
            </Link>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this employee record?</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={() => deleteEmployeeRecord(props)}
            >
              Delete
            </button>
            <Link to="/" className="btn btn-secondary">
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteEmployee }
)(EmployeeDelete);
