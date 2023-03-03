import React, { useEffect, useState } from "react";

function TestOutUseEffect() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    console.log("ran useeffect");
  }, [countTwo]);

  useEffect(() => {
    console.log("count useeffect ran");
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <p>count two: {countTwo}</p>
      <button onClick={() => setCountTwo(countTwo + 1)}>increase count</button>
    </div>
  );
}

export default TestOutUseEffect;
