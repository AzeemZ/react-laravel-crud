import React from "react";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import { createEmployee } from "../../actions";

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formValues) {
    this.props.createEmployee(formValues);
  }

  render() {
    return (
      <div className="mb-5">
        <h1 className="text-center my-5">Create Employee</h1>
        <EmployeeForm onSubmit={this.onSubmit} buttonText="Submit" />
      </div>
    );
  }
}

export default connect(
  null,
  { createEmployee }
)(EmployeeCreate);
