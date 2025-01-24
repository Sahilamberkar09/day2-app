import React, { useState, useEffect } from "react";

const UseEff = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`I've rendered ${count} times!`);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Click Me for decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Click Me for increment
      </button>
    </div>
  );
};

export default UseEff;
