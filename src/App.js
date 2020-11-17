import React from 'react';
import Todo from './components/todo';
// import Scanner from './components/qrcode';
// import Index from './components/index';
// import {HelloWorld , HelloWorld2} from './components/helloworld';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
// import Home from './components/home'; 
// import About from './components/about'; 
// import Contact from './components/contact'; 
// import Zoom from './components/tile';
import Practice from './components/practice';
import {Practice1} from './components/practice1';
import './App.css'; 
class App extends React.Component{
  render(){
    return(
      <div>
         <Todo />
        {/* <Scanner />  */}
        {/* <Router>
          <Switch> */}
            {/* <Route path = '/'><Index/></Route> */}
          {/* </Switch>
        </Router> */}
        <Practice/>
        <Practice1/>
      </div>
    )
  }
}
export default App;
  
// class App extends React.Component { 
//   constructor(props){
//     super();
//     this.state ={
//       x:true
//     }
//   }
//   state={x: true}
//   render() { 
//     return ( 
//        <Router> 
//            <div> 
//             <ul> 
//               <li> 
//                 <Link to="/">Home</Link> 
//               </li> 
//               <li> 
//                 <Link to="/about">About Us</Link> 
//               </li> 
//               <li> 
//                 <Link to="/contact">Contact Us</Link> 
//               </li> 
//             </ul> 
//             <Switch> 
//               <Route exact path='/' component={Home}></Route> 
//               <Route exact path='/about' component={About}></Route> 
//               <Route exact path='/contact' component={Contact}></Route> 
//             </Switch> 
//           </div> 
//           <button onClick={()=> {this.setState({x: !this.state.x})}}>x</button>
//           {/* <HelloWorld/>
//       <HelloWorld2/> */}
//      {this.state.x &&  <Zoom /> }
//        </Router> 
//    ); 
//   } 
// } 
  
// export default App; 

