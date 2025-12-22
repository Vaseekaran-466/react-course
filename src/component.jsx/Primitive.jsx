import { useState } from "react"
import HideShow from "./HideShow"

const Primitive = () => {

    const [string, setString] = useState("initial")
    const [number, setNumber] = useState(959)
    const [bollean, setBollean] = useState(true)
    const [nulle, setNulle] = useState(null)
    const [undefined, setUndefined] = useState()

    const handleString = () => {
        setString("update name here")
    }
    const handlenumber = () => {
        setNumber(946789)
    }
    const handleboolean = () => {
        setBollean(!bollean)
    }
    const handlenull = () => {
        setNulle("value update 100")
    }
    const handleundefined = () => {
        setUndefined("value update 30")
    }

    return (
        <>
            <div className="p-8 bg-gray-100 min-h-screen space-y-4">
                <h1 
                    onClick={handleString} 
                    className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
                >
                    strings : {string}
                </h1>
                
                <h2 
                    onClick={handlenumber} 
                    className="text-xl font-semibold text-green-600 cursor-pointer hover:bg-green-50 p-2 rounded"
                >
                    number : {number}
                </h2>
                
                <h2 
                    onClick={handleboolean} 
                    className="text-xl font-semibold text-purple-600 cursor-pointer hover:bg-purple-50 p-2 rounded"
                >
                    boolean : {bollean.toString()}
                </h2>
                
                <h2 
                    onClick={handlenull} 
                    className="text-xl font-semibold text-gray-500 cursor-pointer hover:bg-gray-200 p-2 rounded"
                >
                    null : {nulle}
                </h2>
                
                <h2 
                    onClick={handleundefined} 
                    className="text-xl font-semibold text-red-400 cursor-pointer hover:bg-red-50 p-2 rounded"
                >
                    undefined : {undefined}
                </h2>
            </div>
          <HideShow/>
        </>
    )
}

export default Primitive