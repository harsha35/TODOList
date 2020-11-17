import React from 'react';
class Practice extends React.Component{
    constructor(props){
        super(props)
            this.state={
                message:'hello',
            } 
            // this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler=()=>{
       this.setState({message:'goodbye'})
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() =>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>click</button>
            </div>

        )
    }
}
export default Practice;