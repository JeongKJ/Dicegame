import './App.css';
import Button from './Button';
import Border from './Border';

function App() {
  return (
    <div id="box">
      <h1>Dice Game</h1>
        <div id='button'>
          <Button>start</Button>
          <Button>reset</Button>
        </div>
        <div id='contain'>
      <Border color="red" />
      <Border color="blue" />
        </div>
    </div>
  );
}

export default App;
