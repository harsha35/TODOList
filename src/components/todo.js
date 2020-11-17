import React from 'react';
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tasks:[],
            value:'',
            

        }
    }
   
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }
    add=() =>{ 
        // console.log(this.state.tasks.length, this.state.tasks[0]);
        // const x = this.state.tasks.map(function (e) {
        //   return e.name;
        // });
        // console.log(x, "this is x");
        if (
          this.state.tasks
            .map(function (e) {
              return e.name;
            })
            .indexOf(this.state.value) === -1   
        )
        
        if(this.state.value.length <= 3 || this.state.value === '')
{
return alert('inorrect input')
}

else {
return this.setState({tasks:this.state.tasks.concat({name:this.state.value,id:this.state.tasks.length})})
}
else{
    return alert("already exists")
}


        // console.log(this.state.tasks.length, this.state.tasks[0])
        

    }
    del=(id)=>{
        console.log(id)
        return this.setState({tasks:this.state.tasks.filter((a)=>{
            console.log(a,'filter')
            return a.id !== id
        })
    })


    }
    // this.tasks.reduce(
    //     (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    //     [],
    //   )
    render(){
        return(
            <div>
                <h1>TODO LIST</h1>
                <input type='text' value={this.state.value} onChange={(e)=> this.handleChange(e)}></input>
                <button onClick={this.add}>Add</button>
                <div>
                    {/* {console.log(this.state.tasks[0].name, this.state.tasks)} 
                    {this.state.tasks.name} */}
                    {this.state.tasks.map((val,i)=> {
                        console.log(val,i, "this is val")
                        return (<div>{val.name}{val.id}
                        <button onClick={()=>this.del(val.id)}>Del</button>
                         </div>) 
                     })}
                </div>

            </div>
        )
    }
}
export default Todo;