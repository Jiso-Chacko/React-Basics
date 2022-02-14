import React,{Component} from "react";

class Form extends Component {

    constructor(){
        super()

        this.state = {
            username : "",
            topic : "react"
        }
    }

    handleUsernameChage = (event) => {

        this.setState({
            username : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChage}></input>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;