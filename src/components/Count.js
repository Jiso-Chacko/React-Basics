import React, {Component} from "react";

class Count extends Component{

    constructor() {
        super()
        this.state = {
            count : 0
        }
    }

    increment(){
        // this.setState({
        //     count : this.state.count + 1
        // },() => {
        //     console.log(this.state.count);
        // })

        this.setState(prevState => ({
            count : prevState.count + 1
        }))
            console.log(this.state.count);

    }

    incrementFive () {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <div>
                <h2><strong>Count : {this.state.count}</strong></h2>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Count;  