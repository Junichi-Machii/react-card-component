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
          <Card
            body="ここにほん"
            title="title"
            image="https://source.unsplash.com/random/500"
            badge={{
              text: "KOOi",
              filled: false,
            }}
            indicator="sale"
            subtitle="Subtitle"
            btn={{
              text: "Button",
              href: "#",
              type: "primary",
              filled: true,
              icon: <SignalIcon />,
            }}
          />
          <Card
            body="Text"
            title="title"
            image="https://source.unsplash.com/random"
            badge={{
              text: "KOOi",
              filled: false,
            }}
            indicator="sale"
            subtitle="Subtitle"
            btn={{
              text: "Button",
              href: "#",
              type: "primary",
              filled: true,
              icon: <SignalIcon />,
            }}
          />
          <Card
            body="he"
            title="Hi"
            image="https://source.unsplash.com/random"
            badge={{
              text: "hi",
              filled: true,
            }}
            indicator="Sold"
            subtitle="Subtitle"
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
