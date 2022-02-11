import React, {Component} from 'react'

class ClassClick extends Component {

    ClickHandler() {
        alert('Button Clicked')
    }

    render() {
        return (
            <div>
                <button onClick = {this.ClickHandler}>Click here</button>
            </div>
        )
    }
}

export default ClassClick; 