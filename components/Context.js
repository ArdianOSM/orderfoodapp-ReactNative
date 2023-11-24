import React,{createContext,useState} from "react";

export const item=createContext()

export const Context =({children})=>{
    const [myBag,set]= useState(initialState);
    return <item.Provider value={}>
        {children}
    </item.Provider>
}