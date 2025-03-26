import React from "react";

const Name=(props)=>{
    return (
        <div>
            <h1>Name:{props.fname}</h1>
            <h1>Lname:{props.lname}</h1>
            <h1>Phone: {props.phone}</h1>
        </div>
    );
};

export default Name;