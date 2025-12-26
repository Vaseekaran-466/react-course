import { useState } from "react"

const Update = () => {

  const [details, setDeatails] = useState({
    name: "unknown",
    age: "unknown"
  })

  const handleclick = () => {

    setDeatails({
      ...details,
      name: "vasee",
      age: 23,
      
    })
   

  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center text-white justify-center bg-cyan-800">

        <button
          onClick={handleclick}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 mb-6"
        >
          update click
        </button>

        <h1 className="text-2xl font-bold text-white">{details.name}</h1>
        <h2 className="text-lg text-white">{details.age}</h2>

      </div>
    </>
  )
}

export default Update
