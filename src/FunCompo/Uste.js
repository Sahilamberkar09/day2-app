import React, { useState } from "react";

const Uste = () => {
  const [count, setCount] = useState(0);

  let decrement = () => {
    setCount(count - 1);
  };

  let increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Click Me for decrement</button>
      <button onClick={increment}>Click Me for increment</button>
    </div>
  );
};

export default Uste;
