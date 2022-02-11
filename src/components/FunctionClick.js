import React from 'react'

const FunctionCLick = () => {

   function clickHandler() {
        alert('Button Clicked')
    }

    return (
        <div>
            <button onClick = {clickHandler}>Click</button>
        </div>
    ) 
}

export default FunctionCLick;