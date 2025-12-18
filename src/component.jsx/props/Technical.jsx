import { useState } from "react"
import Tec_Presentaion from "./Tec_Presentaion"


const Technical = () => {

    const [headline]=useState("This is my tecnical class page")
    const[card]=useState([
        {
        course:"js",
        duration:"30 DAYS",
        fees:5000,
        
        },{
        course:"python",
        duration:"30 DAYS",
        fees:700
    },
    {
        course:"React",
        duration:"30 DAYS",
        fees:8000
    }
    ])
    
  return (
    <>
    <div>
        
    <Tec_Presentaion  tittle_name={headline} cardsection={card} />
        
    </div>
    </>
  )
}

export default Technical