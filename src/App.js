import logo from "./logo.svg";
import "./App.css";

function App() {
  const update = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Whirlpool Temperatur: 32 °C</p>
        <p>Ziel Temperatur: 38 °C</p>
        <a href="/" className="App-button" onClick={update}>
          Aktualisieren
        </a>
      </header>
    </div>
  );
}

export default App;
