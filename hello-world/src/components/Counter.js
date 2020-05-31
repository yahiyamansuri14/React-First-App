import React,{Component} from 'react'
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incrementCount(){
        //takes an object of state/props as parameter:write changes state of state/props object
       
       /* this.setState({
            count:this.state.count+1
        } ,
            ()=>{
             console.log('callback value is',this.state.count)
            }
        )
    */
   //if you want to change the state based on previous state pass function to setState instead of object of props
        this.setState((prevState)=>({
            count:prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    render(){
        return(
            <div>
               <div>Count:-{this.state.count}</div> 
                <button onClick={()=>this.incrementFive()}>Increment</button>
                
            </div>
        )}
}
export default Counter