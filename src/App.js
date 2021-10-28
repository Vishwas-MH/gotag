import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Employees from './pages/employees/Employees';
import Announcements from './pages/announcements/Announcements';
import Assets from './pages/assets/Assets';
import Emergency from './pages/emergency/Emergency';
import Events from './pages/events/Events';
import Expenses from './pages/expenses/Expenses';
import Feedback from './pages/feedback/Feedback';
import Holidays from './pages/holidays/Holidays';
import Organization from './pages/organization/Organization';
import Policies from './pages/policies/Policies';
import Polls from './pages/polls/Polls';
import Support from './pages/support/Support';
import EmployeesCrumb from './pages/employees/EmployeesCrumb';

const App = () => {

  const [selected, setSelected] = useState(1);
  //console.log(selected);
  return (
    <Router>
      <div className="App">
        <Header selected={selected} setSelected={setSelected}/>
        <main>
          <Navbar selected={selected} setSelected={setSelected}/>
          <Switch>
            <Route exact path = "/">
              <Redirect to="/Dashboard"/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path = "/Dashboard" component={Dashboard}></Route>
            {/* <Route exact path = "/Dashboard" component={() => <Dashboard selected={selected} setSelected={setSelected}/> }></Route> */}
          </Switch>
          <Switch>
            <Route exact path = "/EmployeesCrumbs/Employees" component={Employees}></Route>
            {/* <Route exact path = "/Employees" component={() => <Employees selected={selected} setSelected={setSelected}/> }></Route> */}
          </Switch>
          <Switch>
            <Route exact path = "/EmployeesCrumbs" component = {EmployeesCrumb}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Announcements" component={Announcements}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Assets" component={Assets}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Emergency" component={Emergency}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Events" component={Events}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Expenses" component={Expenses}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Feedback" component={Feedback}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Holidays" component={Holidays}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Organization" component={Organization}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Policies" component={Policies}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Polls" component={Polls}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Support" component={Support}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
