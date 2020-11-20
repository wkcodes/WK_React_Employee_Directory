import React from 'react';
import TableBody from './TableBody';
//import "../style/Header.css";

function Table ({headers,users}) {
        return ( 
         <div>
             <table id="dataTable">
                 <thead>
                    <tr>
                    
                    </tr>
                 </thead>
                 <TableBody users={ users } />
             </table>
         </div>
        )
}

export default Table;