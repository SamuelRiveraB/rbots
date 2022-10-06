import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { robots } from "./robots";

function App() {
  const bots = robots;
  const list = [];
  for(const bot of bots) {
    list.push(<Card id={bot.id} name={bot.name} user={bot.username} mail={bot.email}/>);
  }

  return (
    <div className="App">
      {list}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
