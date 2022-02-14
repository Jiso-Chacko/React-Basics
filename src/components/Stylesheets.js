import React from "react"
import  "./Stylesheets.css"

function Stylesheets(props) {
    let className = props.className ? "primary" : ""
    return (
        <div>
            <h2 className={`${className} font`}>Stylesheets</h2>
        </div>
    )
}

export default Stylesheets;