import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import EmployeeList from "./employees/EmployeeList";
import EmployeeCreate from "./employees/EmployeeCreate";
import EmployeeEdit from "./employees/EmployeeEdit";
import EmployeeShow from "./employees/EmployeeShow";
import EmployeeDelete from "./employees/EmployeeDelete";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Route path="/" exact component={EmployeeList} />
        <Route path="/employees/new" exact component={EmployeeCreate} />
        <Route path="/employees/edit/:id" exact component={EmployeeEdit} />
        <Route path="/employees/show/:id" exact component={EmployeeShow} />
        <Route path="/employees/delete/:id" exact component={EmployeeDelete} />
      </Router>
    </div>
  );
};

export default App;
