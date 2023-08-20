import React from "react"

export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.img} className="card-img" />
            <div className="card-info">
                <div className="card-location">
                    <img src="https://imgtr.ee/images/2023/08/20/6b4c6daf12452f203c18951844db6a7c.png" />
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
