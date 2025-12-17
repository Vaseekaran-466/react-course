import { useState } from "react"

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-72 text-center space-y-6">
        
        <h1 className="text-5xl font-bold text-slate-800">
          {count}
        </h1>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="w-full py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            − Minus
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="w-full py-2 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
          >
            + Plus
          </button>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Count
