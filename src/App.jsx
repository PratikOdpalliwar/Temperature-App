import './App.css'
import React, { useState } from "react"

function App() {
  // const [temp, setTemp] = useState(10);
  // const [tempDisColor, setTempDiscolor] = useState("cold")

  // const increaseTemp = () => {
  //   setTemp(temp + 1)
  // }
  // const decreaseTemp = () => {
  //   setTemp(temp + 1)
  // }

  return (
    <div className="App">
      <div className="container">

        <div className="temp-container">
          <div className="temp-display">10°C</div>
        </div>

        <div className="btn-conntainer">
          <button className="btn1" /*onChange={increaseTemp}*/>+</button>
          <button className="btn2"/*onChange={decreaseTemp}*/>-</button></div>
      </div>


    </div>


  )
}

export default App;
