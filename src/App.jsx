
import './App.css';

import { Button } from "./components/Button"

import { useState } from "react";

function App() {
  const [Theme, setTheme] = useState("light");
  return (
    <div className="App">
      <h3>Theme is : {Theme}</h3>

      <button onClick = {() =>{
        setTheme(Theme === "light" ? "dark" : "light")
      }}>Change Theme</button>

      <Button theme = {Theme} onClick={() =>{
        alert("Clicked Click Me")
      }}>Click Me</Button>

      <Button theme = {Theme} onClick={() =>{
        alert("Clicked Sign In")
      }}>Sign In</Button>

      <Button theme = {Theme} onClick={() =>{
        alert("Clicked Sign Up")
      }}>Sign Up</Button>

    </div>
  );
}

export default App;
