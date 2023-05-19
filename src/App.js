import './App.css';
import Button from './Button';
import Border from './Border';
import { useState } from 'react';

const random = (nan) => Math.ceil(Math.random() * nan);

function App() {
  const [seed, setSeed] = useState(10);
  const [banker, setBanker] = useState([]);
  const [delar, setDelar] = useState([]);

  const play = (value) => {
    const bdice = random(6);
    const ddice = random(6);
    setBanker([...banker, bdice]);
    setDelar([...delar, ddice]);
       console.log(seed)
    if (seed > value[1]) {
     
      if (value[0] === 'win' && value[1] === 1) {
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice<ddice){
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'win' && value[1] === 3) {
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice<ddice){
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'win' && value[1] === 5) {
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice<ddice) {
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'win' && value[1] === seed) {
       console.log (value[1])
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice<ddice) {
          setSeed(seed - value[1]);
        }
      };
      
      
      if (value[0] === 'lose' && value[1] === 1) {
        if (bdice < ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice>ddice){
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'lose' && value[1] === 3) {
        if (bdice < ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice>ddice){
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'lose' && value[1] === 5) {
        if (bdice < ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice>ddice){
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'lose' && value[1] === seed) {
        if (bdice < ddice || bdice === ddice) {
          setSeed(seed + value[1]);
        }
        else if(bdice>ddice){
          setSeed(seed - value[1]);
        }
      };
      console.log(seed);
    }
    else if(seed < value[1]) {
      alert('코인이 부족합니다.')
  }
  };
  return (
    <div id="box">
      <h1>Dice Game</h1>
        <div id='button'>
          <Button>reset</Button>
        </div>
      <div id='contain'>
        <Border color="red" team="Banker" dice={banker}  />
        <Border color="blue" team="Delaer" dice={delar} />
        <h2>승리배팅</h2>
        <button type="button" onClick={() => play(['win',1])}>1</button>
        <button type="button" onClick={() => play(['win',3])}>3</button>
        <button type="button" onClick={() => play(['win',5])}>5</button>
        <button type="button" onClick={() => play(['win',seed])}>All in</button>
        <h2>패배배팅</h2>
        <button type="button" onClick={() => play(['lose',1])}>1</button>
        <button type="button" onClick={() => play(['lose',3])}>3</button>
        <button type="button" onClick={() => play(['lose',5])}>5</button>
        <button type="button" onClick={() => play(['lose',seed])}>All in</button>
      </div>

    </div>
  );
}

export default App;
