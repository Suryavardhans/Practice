import React from "react";

// function Greet(props){
//     return(
//         <div>
//             <h1>Hello Suman this is  {props.name} {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }
// const Greet=({name,heroName})=>{ OR
const Greet=(props)=>{

 const {name,heroName}=props;
    
    return(
        <div>
            <h1>Hello {name}{heroName}</h1>
        </div>
    )
}



export default Greet;