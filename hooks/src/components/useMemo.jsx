import React,{useState,useMemo} from 'react';
const cal = (num)=>{
  for(let i=0;i<10000;i++){
      num +=1;
  }
  return num;
}
const UseMemo = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);
    const calc = useMemo(()=>cal(count),[count])
    const inc = ()=>{
        setCount((c)=>c+1);
        console.log(count)
    }
    const addTodo =()=>{
        setTodos((t)=>[...t,"new todo"])
        console.log(todos
          )
    }
     
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
         <h4>{calc}</h4>
        <button onClick={inc}>inc</button>
      </div>
    </div>
  );
}

export default UseMemo;
