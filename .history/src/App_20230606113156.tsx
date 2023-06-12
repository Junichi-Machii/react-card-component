import Badge from "./components/Badge";
import { SignalIcon } from "@heroicons/react/24/solid";
import Button from "./components/Button";
// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <section className="card-container">
          {/* <Badge
            text="New post"
            // filled={true}
          />
          <Button 
          text="Button"
          href="#"
          type="secondary"
          filled={true}
          icon={<SignalIcon  />}
          /> */}
          <Card
            body="he"
            title="Hi"
            image="https://source.unsplash.com/random"
            badge={{
              text: "hi",
              filled: true,
            }}
            indicator="Sold"
            
            btn={{
              text: "Button",
              href: "#",
              type: "secondary",
              filled: true,
              icon: <SignalIcon />,
            }}
          />
        </section>
      </div>
    </>
  );
}

export default App;
