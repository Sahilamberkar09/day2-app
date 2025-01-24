import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log("Input Value: ", inputValue);
  };

  //   useEffect(() => {
  //     console.log("Input Value: ", inputValue);
  //   });

  return (
    <div>
      <label>Enter Name: </label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You Typed : {inputValue}</p>
    </div>
  );
};

export default Input;
