import React, { Component } from "react";

export default class TableHeader extends Component {
  render() {
    return (
        <table>
          <thead>
            <tr>
              <th>Name - </th>
              <th> Email - </th>
              <th> City </th>
            </tr>
          </thead>
        </table>
    );
  }
}
