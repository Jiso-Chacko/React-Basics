import React, {Component} from "react"

class Eventbinding extends Component {

    constructor(){
        super()
        this.state = {
            message : "Hi!"
        }

        this.ChangeMessage = this.ChangeMessage.bind(this)
    }

    // ChangeMessage (){
    //     this.setState({
    //         message : "Good bye!"
    //     })
    // }

    ChangeMessage = () => {
        this.setState({
            message : "Goodbye !"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick ={this.ChangeMessage}>Click</button>
            </div>
        )
    }
}

export default Eventbinding; 