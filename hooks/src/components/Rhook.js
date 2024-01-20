import React,{useReducer} from 'react';
 const reducer = (count,action)=>{
    switch(action){
        case "add":
            return count = count + 1;
        case "sub":
           return count = count - 1;
        default:
            return alert("Unexpected action !");
    }
 }
const Rhook = () => {
    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);
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
      <button onClick={()=>dispatch("add")}>Add</button>
      <h4>{count}</h4>
      <button onClick={()=>dispatch("sub")}>Sub</button>
    </div>
  </section>
  );
}
export default Rhook;
