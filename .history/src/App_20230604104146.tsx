import Badge from './components/Badge'
import Button from './components/Button'
import { useState } from 'react'
import './App.css'

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
