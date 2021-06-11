import logo from './logo.svg';
import './App.css';
import DigitalClock from './Components/DigitalClock';
import AnalogCock from './Components/AnalogCock';
import Timezone from './Timezone';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <AnalogCock />
      <Timezone />
      <br></br>
    </div>
  );
}

export default App;
