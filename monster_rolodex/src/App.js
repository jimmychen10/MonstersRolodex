import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import CardLIst from "./components/card-list/card-list.component"
import SearchBox from './components/search-box.js/search-box';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      wholeMonsters:[],
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    // .then(()=> this.state = response.json)
    .then((res) =>res.json())
    .then((data) => 
      this.setState((state,prop)=> {
        return{
          monsters: data,
          wholeMonsters: data
        }
      },
      () => {
        console.log(this.state)
      } 
    ))

  }
   searchWord(event){
    const searchedWord = event.target.value.toUpperCase()
    console.log(searchedWord)
    const filteredMonsters = this.state.wholeMonsters.filter((monster)=>{
      return monster.name.toUpperCase().includes(searchedWord)
    })

    this.setState(()=> {return {monsters: filteredMonsters}})
  }

  render() {
    return (
      <div>

          <SearchBox searchMonster = {this.searchWord.bind(this)}/>
          <CardLIst monsters= {this.state.monsters}/>

      </div>
    )
  }
}
