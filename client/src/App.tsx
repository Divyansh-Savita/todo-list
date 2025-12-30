
import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState("");
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }
  return (
    <>
      <input type="text"
      value={text}
      onChange={handleChange}
      placeholder="I'm rich"
      />
      <p>{text}</p>
    </>
  )
}

export default App
