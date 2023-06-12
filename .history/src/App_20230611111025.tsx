import Badge from "./components/Badge";
i
import {
  SignalIcon,
  ArchiveBoxIcon,
  CursorArrowRaysIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
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
            subtitle="サブタイトルなど"
            btn={{
              text: "ここをクリック",
              href: "#",
              type: "primary",
              filled: false,
              icon: <ArchiveBoxIcon />,
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
              icon: <HandThumbUpIcon />,
            }}
            indicator="sale"
            subtitle="Subtitle"
            btn={{
              text: "Button",
              href: "#",
              type: "primary",
              filled: true,
              icon: <CursorArrowRaysIcon />,
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
              icon: <HandThumbUpIcon />,
            }}
          />
        </section>
       <div><a href="https://office-machii.com/"><img src="assets/favicon.png" alt="Homeへ戻る" /></a></div>
      </div>
    </>
  );
}

export default App;
