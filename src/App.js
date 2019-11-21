import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Edit from './components/edit';
import Detail from './components/detail';
import Add from './components/add';
import Display from './components/display';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Guitar Database</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/display">View Guitars</Nav.Link>
              <Nav.Link href="/add">Add Guitar</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/add" component={Add} />
            <Route path="/display" component={Display} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
