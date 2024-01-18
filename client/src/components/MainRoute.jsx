import { Routes,Route } from "react-router-dom"

import Authentication from "./UserAutheticate"



export const MainRoutes=()=>{
 return   <Routes>
    
    
    <Route path="/" element={<Authentication/>}/>
    
    
    
        
     

 </Routes>
}