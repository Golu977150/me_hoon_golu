import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);
  const [reset,setReset]= useState('')


  const incrementCount = () => {
    setCount(count++);
  };

  const decrementCount = () => {
    setCount(count--);
  };

  const Reset=()=>{
    setReset(reset===0)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={Reset}>reset</button>

    </div>
  );
}

export default Counter;