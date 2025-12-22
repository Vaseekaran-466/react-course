import React, { useState } from 'react'

const HideShow = () => {
 
    const[hide,setHide]=useState(true)


    const handlebutton =()=>{
        setHide(!hide)
    }


  return (
    <>

    <div className='bg-amber-100 h-100 flex flex-col  justify-center items-center'>
      {hide && <div className='bg-amber-950 text-white w-50 h-50 text-center '>
            this the hideing letter when your clicking the button 
        </div>}
        <button onClick={handlebutton} className='bg-blue-600 p-2 rounded mt-2 text-white w-16  '>{hide ?"hide":"show"} </button>
    </div>
    
    </>
  )
}

export default HideShow