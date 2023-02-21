import React from "react";

class Welcome extends React.Component{
    render(){
        const {name,heroName}=this.props;//this is Destructuring concept
        return(
            <div><h1>This is {name} {heroName}</h1>
            </div>
        )
    }
}

export default Welcome;