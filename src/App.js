import logo from './images/mystery-machine-logo.png';
import pumpkin from './images/pumpkin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pumpkin} className="Spin" alt="logo" />
        {/* <img src={} className="Logo" alt="logo" /> */}
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
