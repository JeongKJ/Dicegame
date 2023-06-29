import './App.css';
import Button from './Button';
import Border from './Border';
import { useState } from 'react';
import Money from './Money';
import Modal from './Modal';

const random = (nan) => Math.ceil(Math.random() * nan);

function App() {
  const [seed, setSeed] = useState(10);
  const [banker, setBanker] = useState([]);
  const [delar, setDelar] = useState([]);
  const [result, setResult] = useState([]);
  const reset = () => {
    setBanker([]);
    setDelar([]);
    setSeed(10);
 }
  const play = (value) => {
    const bdice = random(6);
    const ddice = random(6);
    setBanker([...banker, bdice]);
    setDelar([...delar, ddice]);
    console.log(value);
    if (seed > value[1]) {
     
      if (value[0] === 'win' && value[1] === 1) {
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
          setResult('Banker Win')
        }
        else if(bdice<ddice){
          setSeed(seed - value[1]);
          setResult('Dealer Win');
        }
      };
      if (value[0] === 'win' && value[1] === 3) {
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
          setResult('Banker Win');
        }
        else if(bdice<ddice){
          setSeed(seed - value[1]);
          setResult('Dealer Win');
        
        }
      };
      if (value[0] === 'win' && value[1] === 5) {
        if (bdice > ddice || bdice === ddice) {
          setSeed(seed + value[1]);
          setResult('Banker Win')
        }
        else if(bdice<ddice) {
          setSeed(seed - value[1]);
          setResult('Dealer Win');
        }
      };
      if (value[0] === 'win' && value[1] === 6) {
        console.log(1);
        if (bdice > ddice || bdice === ddice) {
          setResult('Banker Win')
          setSeed(seed*2);
        }
        else if(bdice<ddice) {
          setSeed(0);
          setResult('Dealer Win');
        }
      };
      
      
      if (value[0] === 'lose' && value[1] === 1) {
        if (bdice < ddice || bdice === ddice) {
          setSeed(seed + value[1]);
          setResult('Dealer Win');
        }
        else if (bdice > ddice) {
          setResult('Banker Win')
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'lose' && value[1] === 3) {
        if (bdice < ddice || bdice === ddice) {
          setResult('Dealer Win');
          setSeed(seed + value[1]);
        }
        else if (bdice > ddice) {
          setResult('Banker Win')
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'lose' && value[1] === 5) {
        if (bdice < ddice || bdice === ddice) {
          setResult('Dealer Win');
          setSeed(seed + value[1]);
        }
        else if (bdice > ddice) {
          setResult('Banker Win')
          setSeed(seed - value[1]);
        }
      };
      if (value[0] === 'lose' && value[1] === 6) {
        if (bdice < ddice || bdice === ddice) {
          setResult('Dealer Win');
          setSeed(seed*2);
        }
        else if (bdice > ddice) {
          setResult('Banker Win')
          setSeed(0);
        }
      };
      
    }
    else if(seed < value[1]) {
      alert('코인이 부족합니다.')
    }
    
  };

  console.log(seed);
  return (
    <>
          <Modal />
    <div id="box">
      <h1>Dice Game</h1>
        <div id='button'>
          <button onClick={reset}>reset</button>
      </div>
            <Money seed={seed}/>
      <p>{result}</p>
      <div id='contain'>
           
        <Border color="red" team="Banker" dice={banker}  />
        <Border color="blue" team="Delaer" dice={delar} />
        <h2>승리배팅</h2>
        <div className='winbtn'>
        <button type="button" onClick={() => play(['win',1])}>1</button>
        <button type="button" onClick={() => play(['win',3])}>3</button>
        <button type="button" onClick={() => play(['win',5])}>5</button>
        <button type="button" onClick={() => play(['win',6])}>All in</button>
        </div>
        <h2>패배배팅</h2>
        <div className='losebtn'>
        <button type="button" onClick={() => play(['lose',1])}>1</button>
        <button type="button" onClick={() => play(['lose',3])}>3</button>
        <button type="button" onClick={() => play(['lose',5])}>5</button>
        <button type="button" onClick={() => play(['lose',6])}>All in</button>
        </div>
      </div>

      </div>
      </>
  );
}

export default App;
