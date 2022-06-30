import React, { useState } from "react";

function App() {

  const [inputText, setinputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value
    setinputText(newValue);
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li> a item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
