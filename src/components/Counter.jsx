import { useState } from "preact/hooks";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div class="counter">
      <p>{count}</p>
      <button onClick={() => setCount(() => count + 1)}>+</button>
      <button onClick={() => setCount(() => count - 1)}>-</button>
      <div>{children}</div>
    </div>
  );
};

export default Counter;
