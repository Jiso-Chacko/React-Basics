import React, { Component } from 'react'

 class Refsample extends Component {

    constructor() {
      super()
    
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbRef = (element) => {
        this.cbRef = element
      }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

  render() {
    return (
      <div>
          <input type="text" ref={this.setCbRef} placeholder="cbref"></input>
          {/* <input type="text" ref={this.inputRef}></input> */}
      </div>
    )
  }
}

export default Refsample;