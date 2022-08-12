import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[

      ]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    // .then(()=> this.state = response.json)
    .then((res) =>res.json())
    .then((data) => 
      this.setState((state,prop)=> {
        return{
          monsters: data
        }
      },
      () => {
        console.log(this.state)
      } 
    ))
  }

  render() {
    
    return (
      <div>

        <input 
          type="search" 
          placeholder='search monster'
          onChange={(event)=>{
            const filteredMonsters = this.state.monsters.filter((monster)=>{
             return monster.name.include(event.target.value)
            })
          }}

        />
        {this.state.monsters.map((monster)=>
          <div key= {monster.id}>
            <h2>{monster.name}</h2>

          </div>
          
        )}
      </div>
    )
  }
}
