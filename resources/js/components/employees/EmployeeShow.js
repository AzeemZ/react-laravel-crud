import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEmployee } from "../../actions";

class EmployeeShow extends React.Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.match.params.id);
  }

  renderEmployeeRecord() {
    const { employee } = this.props;

    return (
      <tbody>
        <tr>
          <th>ID</th>
          <td>{employee.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{employee.email}</td>
        </tr>
        <tr>
          <th>Company</th>
          <td>{employee.company}</td>
        </tr>
        <tr>
          <th>Designation</th>
          <td>{employee.designation}</td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>{employee.phone}</td>
        </tr>
        <tr>
          <th>Salary</th>
          <td>{employee.salary}</td>
        </tr>
      </tbody>
    );
  }

  renderContent() {
    if (!this.props.employee) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-center my-5">Show Employee Record</h1>
        <table className="table table-striped table-bordered w-75 mx-auto">
          {this.renderEmployeeRecord()}
        </table>
        <div className="row mt-4">
          <div className="col text-center">
            <Link to="/" className="btn btn-secondary mx-2 px-5">
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    employee: state.employees.find(
      employee => employee.id === parseInt(ownProps.match.params.id)
    )
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployee }
)(EmployeeShow);
