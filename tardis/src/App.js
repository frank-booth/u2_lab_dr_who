import { useState } from 'react'
import './App.css'

function App() {
  const [tardis, setTardis] = useState('Time and Relative Dimension in Space')
  console.log(tardis)

  const changeText = () => {
    setTardis(tardis.toLowerCase())
  }

  return (
    <div className="App">
      <h3 onClick={changeText}>{tardis}</h3>
    </div>
  )
}

export default App
