import { useState } from 'react'
import './App.css'
import DivOne from './components/DivOne'

function App() {
  const [tardis, setTardis] = useState('Time and Relative Dimension in Space')
  console.log(tardis)

  const changeText = () => {
    setTardis(tardis.toLowerCase())
  }

  return (
    <div className="App">
      <DivOne changeText={changeText} tardis={tardis} />
    </div>
  )
}

export default App
