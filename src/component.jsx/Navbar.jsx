import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
  const [btntoggl, setBtntoggl] = useState(false)

  const handlingbtn = () => {
    setBtntoggl(!btntoggl)
  }

  return (
    <div className="bg-violet-300 p-4 flex justify-between items-center">

      <h1 className="font-bold text-2xl">React Course</h1>

      <div className="flex items-center gap-7 text-white font-medium">

        {/* Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={handlingbtn}
            className="flex items-center gap-2 px-4 py-2 rounded bg-amber-200"
          >
            Intraction
            <i className="fa-solid fa-chevron-down"></i>
          </button>

          {btntoggl && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-200 text-black rounded-md shadow-lg flex flex-col">

              <NavLink
                to="/usestate"
                className={({ isActive }) =>
                  isActive ? "bg-red-500 px-4 py-2 text-sm"
                    : "px-4 py-2 text-sm hover:bg-gray-300"
                }
              >
                useState
                
              </NavLink>

              <NavLink
                to="/hooks"
                className={({ isActive }) =>
                  isActive ? "bg-red-500 px-4 py-2 text-sm"
                    : "px-4 py-2 text-sm hover:bg-gray-300"
                }
              >
                Hooks
              </NavLink>

              <NavLink
                to="/useeffect"
                className={({ isActive }) =>
                  isActive ? "bg-red-500 px-4 py-2 text-sm"
                    : "px-4 py-2 text-sm hover:bg-gray-300"
                }
              >
                useEffect
              </NavLink>

            </div>
          )}
        </div>

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black p-2 w-20 text-center rounded"
              : "bg-amber-200 p-2 w-20 text-center rounded"
          }
        >
          Home
        </NavLink>

      </div>
    </div>
  )
}

export default Navbar
