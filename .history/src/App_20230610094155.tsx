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
            body="ここに本文を入力します。"
            title="タイトル名"
            image="https://source.unsplash.com/random/500"
            badge={{
              text: "カテゴリ名など",
              filled: false,
            }}
            indicator="New"
            subtitle="さぶたいとｒ"
            btn={{
              text: "Button",
              href: "#",
              type: "primary",
              filled: true,
              icon: <SignalIcon />,
            }}
          />
          <Card
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea eaque
            excepturi, ducimus corrupti nobis architecto temporibus maxime
            asperiores beatae."
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
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea eaque
        excepturi, ducimus corrupti nobis architecto temporibus maxime
        asperiores beatae.
      </p>
    </>
  );
}

export default App;
