import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
        <input 
        className=''
        type="search" 
        placeholder='search monster'
        onChange={this.props.searchMonster }
      />
    )
  }
}
