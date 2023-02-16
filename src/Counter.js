import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Counter number: {count}</p>
      <button onClick={handleClick}>add 1 to count</button>
    </div>
  );
};

export default Counter;
