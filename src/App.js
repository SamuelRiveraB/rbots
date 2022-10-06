import React from "react";
import './App.css';
import CardList from './CardList';
import Header from './Header';
import { robots } from "./robots";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        robots: robots,
        searchfield: ""
    }
  }

  onHandleChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const filtered = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <Header handleChange={this.onHandleChange} />
        <CardList robots={filtered}/>
      </div>
    );
  }
}

export default App;
