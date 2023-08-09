import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

function createEmoji(entry) {
  return (
    <Entry
      key={entry.id}
      name={entry.name}
      emoji={entry.emoji}
      meaning={entry.meaning}
    />
  );
}

export default App;
