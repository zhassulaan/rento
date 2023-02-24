import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rento</h1>
        <Button text={"Sign up"}/>
      </header>
    </div>
  );
}

export default App;
