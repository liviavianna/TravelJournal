import React from "react";
import marker from "../imgs/mark.svg";


export default function Card (props) {
    return (
        <div className="card">
            <img className="main--img" src={props.imgUrl} alt="locationPic" />
                <div className="card--info">
                    <div className="card--loc">
                    <img src={marker} className="icon--marker" alt="Marker"/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p><span className="bold">{props.startDate} - {props.endDate}</span></p>
                    <p className="card--description">{props.description}</p>
                </div>
        </div>
    )
}