import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Employees from './pages/employees/Employees';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Navbar />
          <Switch>
            <Route exact path = "/">
              <Redirect to="/Dashboard"/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path = "/Dashboard" component={Dashboard}></Route>
          </Switch>
          <Switch>
            <Route exact path = "/Employees" component={Employees}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
