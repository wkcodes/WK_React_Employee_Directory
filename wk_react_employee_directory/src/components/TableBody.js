import React, { Component } from "react";

class TableBody extends Component {
  render() {
    <caption>Employees</caption>
    return this.props.users.map((user) => (
      <table key={user.id} >
        <tbody>
          <tr>
            <td id="name" className="align-middle">
              {user.name}
            </td>
            <td id="email" className="align-middle">
              {user.email}
            </td>
            <td id="city" className="align-middle">
              {user.city}
            </td>
          </tr>
        </tbody>
      </table>
    ));
  }
}

export default TableBody;
