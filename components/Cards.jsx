import React from "react"
import Card from "./Card"
import Data from "./Data"

export default function Cards(){
    const CardElements = Data.map(elem =>{
        return <Card {...elem} />
    })
    return(
        <div className="cards">
            {CardElements}
        </div>
    )
}