import React, { Component } from 'react';

import './App.css';
import GameTile from "./components/GameTile";
import Scoreboard from "./components/Scoreboard"
import Jumbotron from "./components/Jumbotron"


const tiles = [
  {
    id: 1,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/375px-Bowser_SSBU.png",
    isClicked: false
  }, 
  {
    id: 2,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/375px-Ness_SSBU.png",
    isClicked: false
  }, 
  {
    id: 3,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/300px-Captain_Falcon_SSBU.png",
    isClicked: false
  }, 
  {
    id: 4,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/b/b5/SuperMarioParty_DonkeyKong.png/525px-SuperMarioParty_DonkeyKong.png",
    isClicked: false
  }, 
  {
    id: 5,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/300px-Mario_SSBU.png",
    isClicked: false
  }, 
  {
    id: 6,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/300px-Samus_SSBU.png",
    isClicked: false
  }, 
  {
    id: 7,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/375px-Yoshi_SSBU.png",
    isClicked: false
  }, 
  {
    id: 8,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/375px-Pikachu_SSBU.png",
    isClicked: false
  }, 
  {
    id: 9,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/375px-Jigglypuff_SSBU.png",
    isClicked: false
  }, 
  {
    id: 10,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/375px-Luigi_SSBU.png",
    isClicked: false
  }, 
  {
    id: 11,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/e/ed/Kirby_SSB4.png/300px-Kirby_SSB4.png",
    isClicked: false
  }, 
  {
    id: 12,
    name: "test",
    image: "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/300px-Link_SSBU.png",
    isClicked: false
  }
];


class App extends Component {

  state = {
    score: 0,
    isClicked: [],
    round: 1
  }

  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  immutablePush = (arr, newEntry) =>{
    return [ ...arr, newEntry ]      
  }

  handleClick = event => {

    const id = parseInt(event.target.getAttribute("data-id"))
    const clickedBoolean = this.state.isClicked.includes(id)
    if ((this.state.score + 1) % 12 === 0 && !clickedBoolean ){
      alert(`Congratulations! You have completed round ${this.state.round}. The tiles have been reset`);
      this.setState({isClicked: [], round: this.state.round + 1, score: this.state.score + 1});
    } else if (clickedBoolean){
      alert("Game Over")
      this.setState({score: 0, isClicked: [], round: 1})
    } else {
      const addClicked = this.immutablePush(this.state.isClicked, id)
      this.setState({isClicked: addClicked, score: this.state.score + 1})
      console.log(this.state.isClicked);
      this.shuffleCards(tiles);
    }
      
    }

  


  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Scoreboard score={this.state.score} round={this.state.round} />
        {tiles.map(gameTile =>(
          <GameTile
            handleClick= {this.handleClick}
            id={gameTile.id}
            key={gameTile.id}
            name={gameTile.name}
            image={gameTile.image}
            />
        ))}
      </div>
    );
  }
}

export default App;
