import React, {Component} from 'react';
import "../style/Header.css";

export default class Header extends Component {
    render() {
        return ( 
            <div className = "Header" >
                <h1>Employee Directory</h1>
                    <p>
                        Click carrot to filter employees by name
                    </p>
            </div>
        )
    }
}