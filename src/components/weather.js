import React from "react"

const Weather = props => (
    <div className="weatherDiv">
        { props.temp &&
            <div>
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp} °C </p>
                <p>Wind speed: {props.wind} m/s </p>
            </div>
        }
        <p>{props.error}</p>
    </div>
);

export default Weather;