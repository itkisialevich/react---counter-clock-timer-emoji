import React from "react";

import { SimpleCount } from "./components/SimpleCount";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { EmojiList } from "./components/EmojiList";
import Emoji from "./components/EmojiList/Emoji.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title-task"> Task 1 </h1>

      <SimpleCount />

      <h1 className="title-task"> Task 2 </h1>

      <Time />

      <h1 className="title-task"> Task 3 </h1>

      <Timer />

      <h1 className="title-task"> Task 4 </h1>

      <EmojiList DB={Emoji} />
    </div>
  );
}

export default App;
