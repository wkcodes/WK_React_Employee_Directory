import React from 'react';
//import "../style/Wrapper.css";

function Wrapper ({children}){
    console.log(children)
    return (
        <div className="Wrapper">
            {children}
        </div>
    )
}
export default Wrapper;