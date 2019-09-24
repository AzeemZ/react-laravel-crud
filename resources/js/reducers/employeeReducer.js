import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE,
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload;
    case FETCH_EMPLOYEE:
      return [action.payload];
    case CREATE_EMPLOYEE:
      return [...state, action.payload];
    case EDIT_EMPLOYEE:
      const employees = [...state];
      const index = employees.findIndex(
        employee => employee.id === action.payload.id
      );
      return [...employees.splice(index, 1, action.payload)];
    case DELETE_EMPLOYEE:
      return state.filter(s => s.id !== action.payload);
    default:
      return state;
  }
};
