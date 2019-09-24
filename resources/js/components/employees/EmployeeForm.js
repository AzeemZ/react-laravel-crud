import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import employees from "../../api/employees";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "You must enter a name";
  }
  if (!values.email) {
    errors.email = "You must enter an email";
  }
  if (!values.company) {
    errors.company = "You must enter your company name";
  }
  if (!values.designation) {
    errors.designation = "You must enter your designation or job title";
  }
  if (!values.phone) {
    errors.phone = "You must enter your phone number";
  }
  if (!values.salary) {
    errors.salary = "You must enter your salary";
  }

  return errors;
};

const asyncValidate = async (values, unusedArg, props) => {
  const employeesRecord = await employees.get("/employees-record");

  if (props.initialValues) {
    const initialEmailValue = props.initialValues.email;

    employeesRecord.data.map(({ email }) => {
      if (email === values.email && initialEmailValue !== values.email) {
        throw { email: "This email already exists" };
      }
    });
  } else {
    employeesRecord.data.map(({ email }) => {
      if (email === values.email) {
        throw { email: "This email already exists" };
      }
    });
  }
};

const renderField = ({ input, label, meta: { touched, error } }) => {
  const isInvalid = touched && error ? "is-invalid" : "";

  return (
    <div className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <input
        {...input}
        id={input.name}
        className={`form-control ${isInvalid}`}
        autoComplete="off"
      />
      {touched && (error && <div className="invalid-feedback">{error}</div>)}
    </div>
  );
};

const EmployeeForm = props => {
  return (
    <form
      className="w-75 mx-auto needs-validation"
      onSubmit={props.handleSubmit(formValues => props.onSubmit(formValues))}
    >
      <Field name="name" component={renderField} label="Name:" />
      <Field name="email" component={renderField} label="Email Address:" />
      <Field name="company" component={renderField} label="Company:" />
      <Field name="designation" component={renderField} label="Designation:" />
      <Field name="phone" component={renderField} label="Phone:" />
      <Field name="salary" component={renderField} label="Salary:" />
      <div className="row mt-5">
        <div className="col text-center">
          <input
            type="submit"
            className="btn btn-success mx-2 px-5"
            value={props.buttonText}
          />
          <Link className="btn btn-secondary mx-2 px-5" to="/">
            Back
          </Link>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "employeeForm",
  validate,
  asyncValidate,
  asyncBlurFields: ["email"]
})(EmployeeForm);
