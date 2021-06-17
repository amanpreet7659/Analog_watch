import logo from './logo.svg';
import './App.css';
import DigitalClock from './Components/DigitalClock';
import AnalogCock from './Components/AnalogCock';
import Timezone from './Timezone';
import { useState } from 'react';
import Rbuttons from './Rbuttons';

function App() {
  const [show, setShow] = useState(false)
  const [check, setCheck] = useState({
    search: false, compare: false
  })
  return (
    <div className="App">
      <AnalogCock setShow={setShow} />
      {show && <DigitalClock />}
      <br></br>
      <div>
        <Rbuttons check={check} setCheck={setCheck} />
      </div>
      <Timezone check={check} setCheck={setCheck} search={check.search} compare={check.compare} />
      <br></br>
    </div>
  );
}

export default App;
