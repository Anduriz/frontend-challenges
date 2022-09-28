import { useState } from 'react'
import { Grid, Navbar } from './ui'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Grid />
    </div>
  )
}

export default App