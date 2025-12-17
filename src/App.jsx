import Count from "./component.jsx/Count"
import Intraction from "./component.jsx/Intraction"
import Navbar from "./component.jsx/Navbar"
import Primitive from "./component.jsx/Primitive"
import NonPrmitive from "./component.jsx/NonPrmitive"

const App = () => {
  return (
   <>
   <div>
    <Navbar/>
    <Intraction/>
    <Count/>
    <Primitive/>
    {/* <NonPrmitive/> */}
   </div>
   
   </>
  )
}

export default App