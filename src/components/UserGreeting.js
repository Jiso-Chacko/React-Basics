import React, {Component} from "react"

class UserGreeting extends Component {

    constructor() {
        super()
        
        this.state = {
            isLoggedin : true
        }
    }

    render() {

        return this.state.isLoggedin && <div>Welcome Jiso</div>

        // return this.state.isLoggedin ? <div>Welcome Jiso</div> : <div>Welcome Guest</div>

        // let message;
        // if(this.state.isLoggedin){
        //     message = <div>Welcome Jiso</div>
        // } else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
    //     if(this.state.isLoggedin){
    //         return (
    //             <div>
    //                 <div>Welcome Jiso</div>
    //             </div>
    //         )
            
    //     } else{
    //         return(
    //             <div>
    //                <div>Welcome Guest</div>       
    //            </div>
    //        )
    //    }
    }
}

export default UserGreeting; 