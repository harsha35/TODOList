import React, { Component } from 'react';
// import { render } from 'react-dom';
// import TextArea from './TextArea';
// import './style.css';

class Zoom extends Component {
  constructor() {
    console.log("constuctor 1")
    super();
    this.state={
      value:1
    }
  }
  componentWillUpdate(){
    console.log("componentWillUpdate 5")
  }
  componentDidUpdate(){
    // this.setState({value: 2});
     console.log("componentDidUpdate 4")
  }
  componentDidMount(){
    this.setState({value: 10});
    // console.log("componentDidMount 3")
  }
  componentWillMount(){
    console.log("componentWillMount 2")
  }
  shouldComponentUpdate(){
    return true
  } 
  componentWillUnmount(){
      console.log("this is unmount")
  }
  handleChange=(value)=>{
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div>
      {this.state.value}
     {/* <input onChange={(e) => this.handleChange(e.target.value)} />
        <TextArea /> */}
      </div>
    );
  }
}

export default Zoom;

