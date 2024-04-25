import { useState } from 'react';
import './App.css';
import Input from './Input/index.js';
import Output from './output/index.js';

function App() {
  const [output, setOutput] = useState(false)
  const updateOutput = (value)=>{
      setOutput(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Top">
          <h2>Medical Device</h2>
        </div>
        <div>
          {
            output
            ?<Output updateOutput = {updateOutput}/>
            :<Input updateOutput = {updateOutput}/>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
