import React from "react"

export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.img} className="card-img" />
            <div className="card-info">
                <div className="card-location">
                    <img src="images/pin.png" />
                    <p>{prop.location}</p>
                    <a href={prop.link} target="_blank">View on Google Maps</a>
                </div>
                <h1>{prop.name}</h1>
                <h3>{prop.date}</h3>
                <p>{prop.details}</p>
            </div>
        </div>
    )
}
