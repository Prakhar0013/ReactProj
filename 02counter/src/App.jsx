import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  //let counter=5
  
  const addValue = () => {
    counter= counter+1;
    setCounter(counter) 
  }
  const decreaseValue = () => {
    if(counter>=1)
      setCounter(counter-1)
    
  }
   
  
  return (
    <>
      <h1>Project React</h1>
      <h2>Counter Value: {counter}</h2>
      <div style={{display   : 'flex', flexDirection:'column'}}>
      <button onClick={addValue} style={{marginBottom: 5+'px'}}>Add Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      </div>
    </>
  )
}

export default App
