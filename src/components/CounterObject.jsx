import { useState } from "react";

function CounterObject() {
  const [counterInfo, setCounterInfo] = useState({
    title: "Counter with Objects",
    count: 0,
  });

  const increment = () => {
    setCounterInfo((prev)=>{
        return {
            ...prev,
            count: prev.count + 1
        }
    })
  };
  const decrement = () => {
    setCounterInfo((prev)=>(
        {   
            ...prev,
            count: prev.count - 1
        }
    ))
  };

  return (
    <div className="counter">
      <h1>Counter with Object Example</h1>
      <p>Updating object in state.</p>
      <h3>{counterInfo.title}</h3>
      <h1>{counterInfo.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default CounterObject;
