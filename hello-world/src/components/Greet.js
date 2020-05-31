import React from 'react'

/*function Greet(){

    return <h1>This is first functional components..</h1>
}*/
const Greet=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>Hello from {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet