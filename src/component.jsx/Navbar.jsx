import { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {

  const [btntoggl, setBtntoggl] = useState(false)

  const handlingbtn = () => {
    setBtntoggl(!btntoggl)

  }

  return (
    <>

      <div className=" bg-violet-300 p-4  flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">React Course</h1>
        </div>
        <div className="flex justify-center items-center gap-7 text-l font-medium text-white">
          <Link to="/">
            <div className="relative inline-block text-left">
              <button
                onClick={handlingbtn}
                className="flex items-center gap-2  text-white px-4 py-2 rounded">
                 Intraction
                <i className="fa-solid fa-chevron-down"></i>
              </button>

              {btntoggl && (
                <div className="absolute right-0 mt-2 w-40 text-black bg-gray-200 rounded-md shadow-lg flex flex-col">
                  <a
                    href="#"
                    className="px-4 py-2 text-sm hover:bg-gray-300"
                  >
                    use_state
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm hover:bg-gray-300"
                  >
                    hooks
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm hover:bg-gray-300"
                  >
                    useeffect
                  </a>
                </div>
              )}
            </div>
          </Link>
          <Link to="update">Home</Link>
        </div>



      </div>
    </>
  )
}

export default Navbar