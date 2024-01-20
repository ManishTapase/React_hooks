// this hook is basicaly use to manage the state of componet or using this hook you can render the any value 
import React, { useState ,useContext} from "react";
import{CountContext }from "./useContextH.js"
const UsestateHook = () => {
  const [count, setCount] = useState(0);
  const names = useContext(CountContext)
  console.log(names)
  const add = ()=>{
    setCount(count+1);
  }
  const sub = ()=>{
      if(count===0){
        alert("Stop it!")
      }else{
        setCount(count-1);
      }
  }
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
     <div>
      {
        names.map((n)=>{
          return(
            <>
             <h1 key={n.manish.id}>
              {
                n.manish.age
              }
             </h1>
            </>
          )
        })
      }
      
     </div>
    </section>
  );
};

export default UsestateHook;
