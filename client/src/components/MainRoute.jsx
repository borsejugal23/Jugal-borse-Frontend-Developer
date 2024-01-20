import { Routes,Route } from "react-router-dom"

import Authentication from "./UserAutheticate"
import Banner from "../pages/Banner"



export const MainRoutes=()=>{
 return   <Routes>
    
    
    {/* <Route path="/" element={<Authentication/>}/> */}
    <Route path="/" element={<Banner/>}/>

    
    
    
        
     

 </Routes>
}