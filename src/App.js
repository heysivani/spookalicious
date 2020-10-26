import pumpkin from './images/pumpkin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="zoom">
          <span className="zoom text">
          Last halloween, we took a trip to the future.
          This time, we're rewinding back to simpler times 🕺🏾 <br></br>
          Get ready for a spooky night of ~nostalgia~ and fun on
          the evening of October 30th (Winnipeg)<br></br>/ the morning of October 31st (Tokyo)!
          <br></br>
          <br></br>
          We'll be playing ~spooky games~ watching ~spooky movies~ and having a ~spooky~ good time!
          <br></br><br></br>
          Bring your own drinks/snacks/lost souls. 
          <br></br><br></br>
          The spirits are whispering: 
          <br></br>


          </span>
          <img src={pumpkin} className="Spin" alt="logo" id="pumpkin2"/>

        </div>
        <div className="zoom">
          <img src={pumpkin} className="Spin" alt="logo" id="pumpkin"/>
        </div>
        <ul className="zoom text">
            <li>phasmophobia? scooby doo??</li>
            <li>buffy??? the addams family????</li>
            <br></br>
            <li>please commune with the devil<br></br>to submit your own suggestions <br></br> for entertainment 😈</li>
          </ul>
      </header>
    </div>
  );
}

export default App;
