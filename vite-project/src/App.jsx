import { useState } from 'react';
import './App.css'
import Button from './Navbar';


function App() {
  
  let [count, setCount] = useState(0) 
  
  
  function Inc() {
    count = count + 1 
    setCount(count)
  }
  function Dec() {
    if(count <= 0){
      return
    }else{
      count = count - 1 
      setCount(count)
    }
  }
  function Reset() {
    count = 0 
    setCount(count)
  }

  return (
    
      <>
        <h1>Counter App</h1>
        <p>count : {count}</p>

      <div className='buttons'>
        <Button text="incr" func={Inc}/>
        <Button text="dece" func={Dec}/>
        <Button text="reset" func={Reset}/>
      </div>
      </>
  )
}

export default App
