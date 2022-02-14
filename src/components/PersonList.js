import React from "react";

function PersonList({person}){

    return (
        <h2>I am {person.name}, {person.age} old. I am from {person.place}</h2>
    )
}

export default PersonList;