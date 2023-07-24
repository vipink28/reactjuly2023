import { useState } from "react";

function Counter() {
  const [title, setTitle] = useState("React State Examples");
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const showCounter = () => {
    setIsVisible(true);
  };

  return (
    <div className="counter">
      <h1>{title}</h1>
      <button onClick={showCounter}>Show Counter</button>
      {isVisible ? (
        <div>
          <h2>{count}</h2>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      ) : (
        "No Data"
      )}
    </div>
  );
}
export default Counter;
