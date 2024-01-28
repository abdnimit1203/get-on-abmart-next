"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-6 p-2 items-center">
      <button className="btn btn-error " onClick={() => setCount(count - 1)}>
        -
      </button>
      <p>{count}</p>
      <button className="btn btn-primary " onClick={() => setCount(count + 1)}>
       +
      </button>
    </div>
  );
};

export default Counter;
