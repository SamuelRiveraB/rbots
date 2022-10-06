import React from "react";
import './App.css';
import CardList from './CardList';
import Header from './Header';
import Scroll from './Scroll';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        robots: [],
        searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(users => {
      this.setState({ robots: users });
    });
  }

  onHandleChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const filtered = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="App">
          <Header handleChange={this.onHandleChange} />
          <Scroll>
            <CardList robots={filtered}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
