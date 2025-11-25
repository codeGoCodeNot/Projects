import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(10);

  const handleClick = (value: number) => setCounter((prev) => prev + value);

  return (
    <>
      <h1>The counter is: {counter}</h1>
      <button
        disabled={counter === 100}
        style={{ cursor: counter === 100 ? "not-allowed" : "pointer" }}
        onClick={() => handleClick(5)}
      >
        Click me!
      </button>
      <button
        disabled={counter === 100}
        style={{ cursor: counter === 100 ? "not-allowed" : "pointer" }}
        onClick={() => handleClick(10)}
      >
        Click me!
      </button>
    </>
  );
};

export default UseState;
