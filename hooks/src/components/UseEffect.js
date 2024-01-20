// this hook is use for performing side effects in react app or in components in this we have callback function and dependancy array.
// when array depandancy not use then component will render on click on any of components
// if empty depandancy arraay use then that will render once when app refresh
// if you use depandancy array and fill with depandnet value then that will only upadaate when that value update like here we have count
import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    if (count === 0) {
      alert("Stop it!");
    } else {
      setCount(count - 1);
    }
  };
useEffect(() => {
    document.title = count;
}, [count]);
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        textItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>useState Hook</h2>
      <div style={{ display: "flex" }}>
        <button onClick={add}>Add</button>
        <h4>{count}</h4>
        <button onClick={sub}>Sub</button>
      </div>
    </section>
  );
};

export default UseEffect;
