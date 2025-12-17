import { useState } from "react"


const NonPrmitive = () => {

  const [arrays, setArrays] = useState(["react", "js", "python", "twcss"]);
  const [objectes, setObjectes] = useState({
    
      name: "react",
      duration: "30days",
      learning_method: "project oriented"
    }
  )
  const [arobject, setArobject] = useState([{
    name: "vasee",
    age: 23,
    degree: "bsc(cs)"
  }])
  const hnadlingarray = () => {
    setArrays([1])
  }

  const hnadlingobject = () => {
    setObjectes(name)
  }
  const hnadlingarrayofobj = () => {
    setArobject()
  }
  return (
    <>
      <div>


        <div>
          <h1 onClick={hnadlingarray}>array :{arrays}</h1>
          <h1 onClick={hnadlingobject}>object :{objectes}</h1>
          <h1 onClick={hnadlingarrayofobj}>array of object :{arobject}</h1>
        </div>
      </div>

    </>
  )
}

export default NonPrmitive