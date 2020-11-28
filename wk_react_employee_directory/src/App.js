import React, { Component } from "react";
//import Wrapper from "./components/Wrapper";
import TableHeader from "./components/TableHeader";
//import TableSort from "./components/TableSort";
import TableBody from "./components/TableBody";
//import { Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Bob",
        email: "bob@gmail.com",
        city: "Seattle",
        us: true
      },
      {
        id: 2,
        name: "Kristen",
        email: "kristen@gmail.com",
        city: "New York",
        us: true
      },
      {
        id: 3,
        name: "Hans",
        email: "hans@gmail.com",
        city: "Berlin",
        us: false
      },
      {
        id: 4,
        name: "Sofia",
        email: "sofia@gmail.com",
        city: "Barcelona",
        us: false
      },
    ],
  };

  sortHandler = (props) => {
    const { users } = props;
    console.log(users);
    
  }

  filterHandler = () => {

  }

  render() {
    return (
      <div className="center">
        <h1>Employee Directory powered by React!</h1>
        <button onClick={this.sortHandler}>Sort employees alphabetically</button>
        <button onClick={this.filterHandler}>Only show U.S. employees</button>
        <TableHeader></TableHeader>
        <TableBody users={this.state.users} ></TableBody>
      </div>
    );
  }
}

export default App;
