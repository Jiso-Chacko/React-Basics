import React from 'react'

function ErrorBoundary({heroName}) {
    if(heroName === "Joker"){
        // throw new Error()
        throw new Error("Not a hero!")
    }
  return (
    <div>{heroName}</div>
  )
}

export default ErrorBoundary;