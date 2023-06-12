import Badge from './components/Badge'
import { SignalIcon } from '@heroicons/react/24/solid'
import Button from './components/Button'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <sec className="card-container">
          <Badge
            text="New post"
            // filled={true}
          />
          <Button 
          text="Button"
          href="#"
          type="secondary"
          filled={true}
          icon={<SignalIcon  />}
          />
        </sec>
      </div>
    </>
  )
}

export default App

