import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard'
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({playerData: response.data});
        console.log(this.state.playerData);
      })
      .catch(error => {
        console.log("error", error)
      })
  }

  render(){
    return(
      <div>
        <Navbar/>
        <PlayerCard playerData={this.state.playerData}/>
      </div>
    )
  }

}

export default App;
