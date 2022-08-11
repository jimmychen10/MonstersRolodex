import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    this.state ={
      
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    // .then(()=> this.state = response.json)
    .then((res) => 
      this.setState((state,prop)=> {
        return{
          res
        }
      }) 
    )
    console.log(this.state)
  }

  render() {
    
    return (
      <div>{this.state.map((key, item)=>item)}</div>
    )
  }
}
