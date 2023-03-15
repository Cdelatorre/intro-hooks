import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [crazyPapasDay, setCrazyPapasDay] = useState(false);

  const add = () => setCount(count + 1);
  const remove = () => {
    if (count > 5) {
      setCount(count - 1);
    }
  };
  const handleCrazyDay = () => setCrazyPapasDay(!crazyPapasDay);

  const multiplyByRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setCount(count * randomNumber);
  };

  const divideByRandom = () => {
    const randomNumber = Math.floor(Math.random() * 76 + 1);
    setCount(count / randomNumber);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>Add + 1</button>
      <button onClick={remove}>Remove - 1</button>
      <button onClick={handleCrazyDay}>Crazy papas day!</button>
      <button onClick={multiplyByRandom}>Multiply by random n</button>
      <button onClick={divideByRandom}>Divide by random n</button>

      {crazyPapasDay && <div> Hola nos hemos vuelto locos! </div>}
    </div>
  );
};

export default Counter;
