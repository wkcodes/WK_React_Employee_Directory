import React, {Component} from 'react';
import Table from "./Table";

export default class TableWrapper extends Component {
    state = {
        users: [{}]
    };

    headers = [
        {name: "firstName"}
    ]

    /*handle function - */
    handleFilter = header => {

    }

    render() {
        return ( 
            <Table handleFilter={this.handleFilter}></Table>
        )
    }
}

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
      

//click event 

//response from api, 
//set state to that response 

//function for sorting users by name alphabetically

//handle carrot click 

//function for filtering users by location?