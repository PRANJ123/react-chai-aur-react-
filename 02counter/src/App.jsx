import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]  = useState(0);
let addValue = () =>{
  console.log("Clicked");
  counter = counter + 1;
  if ((counter <=22)&&(counter>=0)) {
    setCounter(counter);
  }
  else if(counter>22){
    counter = 22
    setCounter(counter);
  }
  else{
    counter = 0;
    setCounter(counter);
  }
  
}
let decreaseValue = () =>{
  console.log("Clicked");
  counter = counter -1;
  if ((counter <=22)&&(counter>=0)) {
    setCounter(counter);
  }
  else if(counter>22){
    counter = 22
    setCounter(counter);
  }
  else{
    counter = 0;
    setCounter(counter);
  }
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={decreaseValue}>decrease Value</button>
    </>
  )
}

export default App
