import React from "react"

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City"></input>
        <button>Get weather forecast</button>
    </form>
);

export default Form;