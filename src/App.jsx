import Count from "./component.jsx/Count"
import Intraction from "./component.jsx/Intraction"
import Navbar from "./component.jsx/Navbar"
import Primitive from "./component.jsx/Primitive"
import NonPrmitive from "./component.jsx/NonPrmitive"
import { Route, Routes } from "react-router-dom"
import Home from "./component.jsx/Home"
import Technical from "./component.jsx/props/Technical"

const App = () => {
  return (
   <>
   <nav>
    <Navbar/>
     
   </nav>
   <div>
    <Routes>
      <Route path="/"  element={<Home/>} ></Route>
      <Route path="/intraction"  element={<Intraction/>} ></Route>
      <Route path="/usestate"  element={<Primitive/>} ></Route>
      <Route path="/hooks"  element={<NonPrmitive/>} ></Route>
      <Route path="/useeffect"  element={''} ></Route>
      
      
      </Routes> 
     
    <Technical/>
    
   </div>
   
   </>
  )
}

export default App