import React,{useRef,useState}from 'react';

const UseRef = () => {
    const [startTime,setStartTime] = useState(null);
    const [now,setNow] = useState(null);
    const inpRef = useRef(null);
const start =()=>{
    setStartTime(Date.now());
    setNow(Date.now());
    inpRef.current = setInterval(()=>{
        setNow(Date.now());
    },1000)
}
var secondPassed = 0;
if(startTime != null && now != null){
    secondPassed = (now - startTime)/1000;
}
 const stop = ()=>{
    clearInterval(inpRef.current)
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
        <button onClick={start}>Start</button>
        <h4>This is time:{secondPassed.toFixed(3)}</h4>
        <button onClick={stop}>Stop</button>
      </div> 
    </section>
  );
}

export default UseRef;
