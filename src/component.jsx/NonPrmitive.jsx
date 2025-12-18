import { useState } from "react"

const NonPrmitive = () => {

  const [arrays, setArrays] = useState(["react", "js", "python", "twcss"]);
  const [objectes, setObjectes] = useState({
    name: "react",
    duration: "30days",
    learning_method: "project oriented"
  })
  const [arobject, setArobject] = useState([{
    name: "vasee",
    age: 23,
    degree: "bsc(cs)"
  }])

  const hnadlingarray = () => {
    setArrays(["coursse","python","vasee"])
  }

  const hnadlingobject = () => {
    setObjectes({ name: "karan" })
  }

  const hnadlingarrayofobj = () => {
    setArobject()
  }

  return (
    <>
      <div className="min-h-screen bg-slate-900 flex justify-center items-center">
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-4 text-white">

          <h1
            onClick={hnadlingarray}
            className="cursor-pointer bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            array : {arrays[1]}
          </h1>

          <h1
            onClick={hnadlingobject}
            className="cursor-pointer bg-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-600"
          >
            object : {objectes.name}
          </h1>

          {arobject.map((e, i) => (
            <div key={i} className="bg-slate-700 p-4 rounded-lg space-y-1">
              <h1
                onClick={hnadlingarrayofobj}
                className="cursor-pointer text-yellow-400"
              >
                Name : {e.name}
              </h1>
              <h1>Age : {e.age}</h1>
              <h1>Degree : {e.degree}</h1>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default NonPrmitive
