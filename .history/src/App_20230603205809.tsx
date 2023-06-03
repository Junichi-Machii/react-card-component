import Badge from './components/Badge'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Badge 
          text="New post"
          filled= 
        />
      </div>
    </>
  )
}

export default App
