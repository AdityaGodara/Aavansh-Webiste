import React from "react";
import Card from "./Card";
import coredata from "./coredata";

export default function CoreTeam(){
    const coreCard = coredata.map(item => {
        return <Card 
                    name={item.name}
                    post={item.post}
                    img={item.img}
                />
    })
    return <>
        <div className="core-container">
            <div className="core-header">
                <center><h1 className="core-title">Core Team</h1></center> 
            </div>
            <div className="card">
                {coreCard}
            </div>
        </div>
    </>
}