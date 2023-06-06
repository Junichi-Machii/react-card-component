import Badge from './components/Badge'
import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="card-container">
          <Badge
            text="New post"
            // filled={true}
          />
          <Button />
        </div>
      </div>
    </>
  )
}

export default App
