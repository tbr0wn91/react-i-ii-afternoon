import React, { Component } from 'react';
import data from "./data";
import './App.css';
import Card from "./components/card";
import NavBar from './components/navbar';
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      data:data,
      index: 0
    }

    this.goForward = this.goForward.bind(this)
    this.goBackward = this.goBackward.bind(this)
  }


  goForward(){
    let { index, data,} = this.state
    if(data[index + 1]){
      this.setState({
        index:this.state.index += 1
      })
    }
    else{
      console.log("youve reached the end of the array")
      this.setState({
        index:0
      })
    }

    
  }

  goBackward(){
    let {index, data} = this.state
    if(data[index - 1]){
      this.setState({
        index:this.state.index -= 1
      })
    }
    else{
      console.log("youve reached the beginning")
      this.setState({
        index:24
      })
    }
  
    
  }



  render(){
    return (
      
      <div className="App">
         <div className="header"><span className="title">Home</span></div>
         <Card parentData = {this.state.data[this.state.index]} />
         <NavBar goForwardFn = {this.goForward}
                 goBackwardFn = {this.goBackward}/>
      </div>
    )
  }
  
}

export default App;
