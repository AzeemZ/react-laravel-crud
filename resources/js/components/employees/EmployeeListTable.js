import React from "react";
import { Link } from "react-router-dom";

const employeeTableBody = ({ employees, searchInput }) => {
  const searchRegex = new RegExp(`^${searchInput}`, "i");

  return employees
    .filter(employee => employee.email.match(searchRegex))
    .map(employee => {
      return (
        <tbody key={employee.id}>
          <tr>
            <td className="align-middle"> {employee.id} </td>
            <td className="align-middle"> {employee.name} </td>
            <td className="align-middle"> {employee.email} </td>
            <td className="align-middle"> {employee.company} </td>
            <td className="align-middle"> {employee.designation} </td>
            <td className="align-middle">
              <Link
                className="btn btn-info mr-1"
                to={`/employees/show/${employee.id}`}
                title="Click to see full employee details"
              >
                Show
              </Link>
              <Link
                className="btn btn-success mr-1"
                to={`/employees/edit/${employee.id}`}
              >
                Update
              </Link>
              <Link
                className="btn btn-danger"
                to={`/employees/delete/${employee.id}`}
              >
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
      );
    });
};

const EmployeeListTable = props => {
  return (
    <table className="table table-bordered table-striped table-responsive-lg">
      <thead className="thead-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Designation</th>
          <th style={{ width: "22%" }}>Actions</th>
        </tr>
      </thead>
      {employeeTableBody(props)}
    </table>
  );
};

export default EmployeeListTable;
