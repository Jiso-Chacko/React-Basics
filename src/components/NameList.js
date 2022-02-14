import React, {Component} from "react"
import PersonList from "./PersonList"
class NameList extends Component {

    render() {
        const person = [
            {
                id: 1,
                name : "Jake",
                age : 28,
                place : "Alabama"
            },
            {
                id : 2,
                name : "July",
                age : 22,
                place : "kochi"
            },
            {
                id : 3,
                name : "Ben",
                place : "Kannur",
                age : 45
            },
            {
                id : 4,
                name : "Kelly",
                age : 9,
                place : "Miami"
            }

        ]
        const personArr = person.map(person => <PersonList key= {person.id} person={person}/>)

        return <div>{personArr}</div>
    }

    // render(){
    //     const Name = ["Ben", "Jake", "July", "Peter"]
    //     const NameArr = Name.map(name => <h2>{name}</h2>)
    //     return (
    //         <div>{NameArr}</div>
    //     )
    // }
}

export default NameList; 