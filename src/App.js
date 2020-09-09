import React, { useState } from "react";
import "./index.css";
function App() {
  const [isLit, setLit] = useState(false);
  let [count,setCount]=useState(0);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <h1>This Room Is {isLit ? "lit" : "dark"}<br/>
      Counter:{count}
      </h1>
      <button className="btn" onClick={() => setLit(!isLit)}>{isLit ? "TURN OFF" : "TURN ON"}  </button>
      <button className="btn" onClick={()=> setCount(++count)}>+</button>
      <button className="btn" onClick={()=> setCount(--count)}>-</button>
      <div className="gopal">Developed By&nbsp;<a href="https://www.github.com/GopalDas123">Gopal Das</a></div>
    </div>
  );
}

export default App;
