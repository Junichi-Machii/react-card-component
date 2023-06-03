import Badge from './components/Badge'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="car">
          <Badge
            text="New post"
            filled={true}
          />
        </div>
      </div>
    </>
  )
}

export default App
