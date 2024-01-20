import React,{useState,useMemo, useCallback} from 'react';
const UseCallback = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);
    const inc = ()=>{
        setCount(count+1);
        console.log(count)
    }
    const addTodo =useCallback(()=>{
        setTodos((t)=>[...t,"new todo"])
        console.log(todos)
    },[todos])
  return (
    <div style={{display:"flex"}}>
      <div>
        <h2>my todos</h2>
        {
            todos.map((todo,index)=>{
                return (<><p key={index}>{todo}</p> </>) })
        }
        <button onClick={addTodo}>add todo</button>
      </div>
      <div>
        <h2>my todos {count}</h2>
        <button onClick={inc}>inc</button>
      </div>
    </div>
  );
}

export default UseCallback;
