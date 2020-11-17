import React from 'react';
import About from './about';
class Home extends React.Component{
    render(){
        return(
            <div>this is home..
                <About name={"harsha"}/>
            </div>
        )
    }
}
export default Home;