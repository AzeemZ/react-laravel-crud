import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEmployees } from "../../actions";
import EmployeeListTable from "./EmployeeListTable";
import Pagination from "../Pagination";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  handleSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    return (
      <div className="mb-5">
        <h1 className="text-center display-4 my-4">Employees</h1>
        <div className="form-row mb-3">
          <div className="col">
            <Link className="btn btn-primary mb-3" to="/employees/new">
              Add New Employee
            </Link>
          </div>
          <div className="col-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your email here..."
                value={this.state.searchInput}
                onChange={this.handleSearchInput}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-search text-grey" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <EmployeeListTable
          searchInput={this.state.searchInput}
          employees={this.props.employees}
        />
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { employees: state.employees };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
