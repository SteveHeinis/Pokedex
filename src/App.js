import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    num : "",
    data : "",
    txt : false
  }


  loadPokemon = (e) => {
    e.preventDefault();
    if(this.state.num.length > 0){
      console.log(e.target.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.num}`)
    .then(res => res.json())
    .then(body =>{
      this.setState({
        data : body,
        txt : true,
      });
    })
    .catch(err => {throw err});  
  }
}

  handleInputChange = (e) =>{
          console.log(e.target.value)

    this.setState({
      num : e.target.value,
    })
  } 


  render() {
    return (
      <div className="App">
        <form action="">
          <input type="text" onChange={this.handleInputChange} value={this.state.num}/>
          <button onClick={this.loadPokemon}> Trouve mon Pokemon </button>
        </form>
        <p style={{display: this.state.txt ? 'block' : 'none'}}>Name : {this.state.data && this.state.data.name}</p>
        <img src={this.state.data && this.state.data.sprites.front_default}/>
        <p style={{display: this.state.txt ? 'block' : 'none'}}>Type : {this.state.data && this.state.data.types[0].type.name}</p>
      </div>
    );
  }
}

export default App;
