
import  { useRef, useState} from 'react'
import './App.css'

function App() {
  
  const [display,setDisplay]=useState<string>("");
  const inputref=useRef<HTMLInputElement>(null);
  const handleClick =()=>{
    if (inputref.current) {
      setDisplay(inputref.current.value);
    }
  }
  return (
    <>
      <input type="text"
      ref={inputref}
      placeholder="I'm rich"
      />
      <button onClick={handleClick}>Click me</button>
      <p>{display}</p>
    </>
  )
}

export default App
