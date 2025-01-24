import React, { useState, useEffect } from "react";

function TitleUp() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    // document.title = count;
  };

  useEffect(() => {
    document.title = count;
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default TitleUp;
