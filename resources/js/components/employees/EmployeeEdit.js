import React from "react";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import { editEmployee, fetchEmployee } from "../../actions";

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmployee(this.props.match.params.id);
  }

  onSubmit(formValues) {
    const { editEmployee, employee } = this.props;
    editEmployee(employee.id, formValues);
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
      <div className="mb-5">
        <h1 className="text-center my-5">Update Employee</h1>
        <EmployeeForm
          initialValues={_.pick(
            this.props.employee,
            "name",
            "email",
            "company",
            "designation",
            "phone",
            "salary"
          )}
          onSubmit={this.onSubmit}
          buttonText="Update"
        />
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
  { editEmployee, fetchEmployee }
)(EmployeeCreate);
