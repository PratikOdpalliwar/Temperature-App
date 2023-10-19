import './App.css'
import React, { useState } from "react"

function App() {
  const [temp, setTemp] = useState(10);
  const [tempDisColor, setTempDiscolor] = useState("cold")

  const increaseTemp = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;
    setTemp(newTemp);

    if (newTemp >= 15) {
      setTempDiscolor("hot");
    }
  }


  const decreaseTemp = () => {
    if (temp === 0) return;

    const newTemp1 = temp - 1;
    setTemp(newTemp1);
    if (newTemp1 < 16) {
        setTempDiscolor("cold");
    }
  };


  return (
    <div className="App">
      <div className="container">

        <div className="temp-container">
          <div className={`temp-display ${tempDisColor}`}>{temp}°C</div>
        </div>

        <div className="btn-conntainer">
          <button className="btn1" onClick={decreaseTemp}>-</button>
          <button className="btn2" onClick={increaseTemp}>+</button></div>
      </div>


    </div>


  )
}

export default App;
