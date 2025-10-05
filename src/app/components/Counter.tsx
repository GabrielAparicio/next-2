'use client';

import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </p>
    </>
  );
};

export default Counter;
