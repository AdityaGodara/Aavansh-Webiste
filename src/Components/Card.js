import React from "react";

export default function Card(prop){

    return <>
        <div className="card-container">
            <center><img src={prop.img} alt="pic" className="card-pic"/></center>
            <center>
                <h2 className="card-name">{prop.name}</h2>
                <small>{prop.post}</small>
            </center>
            </div>
    </>
}