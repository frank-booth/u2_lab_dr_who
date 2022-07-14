import { useState } from 'react'
import './App.css'
import DivOne from './components/DivOne'

function App() {
  const [tardis, setTardis] = useState({
    name: 'Time and Relative Dimension in Space',
    caps: false
  })
  console.log(tardis)

  const changeText = () => {
    let tardisLower = { ...tardis }
    if (!tardis.caps) {
      tardisLower.name = tardisLower.name.toLowerCase()
      tardisLower.caps = true
    } else {
      tardisLower.name = tardisLower.name.toUpperCase()
      tardisLower.caps = false
    }
    setTardis(tardisLower)
  }

  return (
    <div className="App">
      <DivOne changeText={changeText} tardis={tardis.name} />
    </div>
  )
}

export default App
