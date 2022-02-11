import React from 'react'

export const Greet = (props) => {
    const {name ,heroName} = props
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName} </h1>
            {/* {children} */}
        </div>
    )

}
// export default greet