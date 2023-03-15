import React, { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [crazyPapasDay, setCrazyPapasDay] = useState(false);
  const mountRef = useRef(null);
  const addButtonRef = useRef(null);

  const add = () => setCount(count + 1);
  const remove = () => {
    setCount(count - 1);
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

  useEffect(() => {
    toast("Me he montado");
  }, []);

  const notify = useCallback(() => {
    toast("Whow!!!!");
  }, []);

  // el useCallback guarda la referencia de la función y no cambiará a no ser que cambie algo de su array de dependencias
  // incluirlo de forma obligatoria, cuando esta función forme parte del array de dependencias del useEffect()

  useEffect(() => {
    console.log("entro");
    if (!mountRef.current) {
      mountRef.current = true;
    } else {
      notify();
    }
  }, [count, crazyPapasDay, notify]);

  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <button ref={addButtonRef} className="btn btn-primary me-1" onClick={add}>
        Add + 1
      </button>
      <button className="btn btn-primary me-1" onClick={remove}>
        Remove - 1
      </button>
      <button className="btn btn-primary me-1" onClick={handleCrazyDay}>
        Crazy papas day!
      </button>
      <button className="btn btn-primary me-1" onClick={multiplyByRandom}>
        Multiply by random n
      </button>
      <button className="btn btn-primary me-1" onClick={divideByRandom}>
        Divide by random n
      </button>

      {crazyPapasDay && <div> Hola nos hemos vuelto locos! </div>}
      <ToastContainer />
    </div>
  );
};

export default Counter;
