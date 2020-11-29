import React, { Component } from "react";
import TableHeader from "./components/TableHeader";
//import SortedTable from "./components/SortedTable";
import TableBody from "./components/TableBody";

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
      {
        id: 5,
        name: "Zach",
        email: "zach@gmail.com",
        city: "Portland",
        us: true
      },
      {
        id: 6,
        name: "Amelia",
        email: "amelia@gmail.com",
        city: "London",
        us: false
      },
      {
        id: 7,
        name: "Mikhail",
        email: "mikhail@gmail.com",
        city: "Moscow",
        us: false
      },
    ],
    sorted: false,
    filtered: false
  };

  sortHandler = () => {
    //sets sorted attribute of state
    this.setState({ sorted: true });
    //sorts user array by first letter of name
    this.state.users.sort(function(a,b) {
      let nameA = a.name;
      let nameB = b.name;
      if(nameA > nameB){
        return -a;
      }if(nameA < nameB) {
        return -1;
      }
      return 0;
    });
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
