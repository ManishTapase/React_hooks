import React,{createContext} from "react";
const CountContext = createContext();
const CountProvider = ({children})=>{
    const names = {
        manish:{
            id:Date.now(),
            age:21,
            color:"red"
        },
        sita:{
            id:Date.now(),
            age:21,
            color:"pink"
        }
    }
   return(
    <CountContext.Provider value={[names]}>
        {children}
    </CountContext.Provider>
   )
}
export  { CountContext,CountProvider};















