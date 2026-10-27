import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  function increase() {
    setCount((pre) => pre + 1);
  }
  function decrease() {
    setCount((pre) => pre - 1);
  }
  function reset() {
    setCount(0);
  }

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  let countColor = "";

  if (count > 0) countColor = "positive";
  else if (count < 0) countColor = "negative";

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <h1>Tap counter</h1>

      <p className={`count ${countColor}`}>{count}</p>

      <div className="buttons">
        <button className="Minus" onClick={decrease}>
          -
        </button>
        <button onClick={reset}>reset</button>
        <button onClick={increase}>+</button>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {isDark ? "light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default App;
