import history from "../history";
import employees from "../api/employees";
import {
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES
} from "./types";

export const fetchEmployees = () => async dispatch => {
  const response = await employees.get("/employees");

  dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
};

export const fetchEmployee = id => async dispatch => {
  const response = await employees.get(`/employees/${id}`);

  dispatch({ type: FETCH_EMPLOYEE, payload: response.data });
};

export const createEmployee = formValues => async dispatch => {
  const response = await employees.post("/employees", formValues);

  dispatch({ type: CREATE_EMPLOYEE, payload: response.data });

  history.push("/");
};

export const editEmployee = (id, formValues) => async dispatch => {
  const response = await employees.patch(`/employees/${id}`, formValues);

  dispatch({ type: EDIT_EMPLOYEE, payload: response.data });

  history.push("/");
};

export const deleteEmployee = id => async dispatch => {
  await employees.delete(`/employees/${id}`);

  dispatch({ type: DELETE_EMPLOYEE, payload: id });

  history.push('/');
};
