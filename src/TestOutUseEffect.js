import React, { useEffect, useState } from "react";

function TestOutUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ran useeffect");
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
}

export default TestOutUseEffect;
