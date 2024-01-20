import React ,{useState,useLayoutEffect,useEffect}from 'react';
const UseLayEff = () => {
    const [value,setValue] = useState(0)

    useLayoutEffect(() => {
        setValue("hiii");
        console.log("bye",Date.now())
        console.log("manish",value)
     
  },[value]);
  return (
    <h1>
            welcome {value}
    </h1>
  );
}

export default UseLayEff;
