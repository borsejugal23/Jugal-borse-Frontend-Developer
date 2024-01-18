import { createContext } from "react";
import { useState } from "react";

export const AuthContext=createContext()


function AuthContextProvider({children}) {
    const [swap,setSwap]=useState(false);
   

    const toggle=()=>{
        setSwap(p=>!p)
    }
    
    return <AuthContext.Provider  value={{swap,toggle}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
