const Tec_Presentaion = ({ tittle_name, cardsection }) => {
  return (
    <>
      {/* Header */}
      <div className="bg-amber-200 py-10 text-center">
        <header>
          <h1 className="text-5xl font-bold text-black">
            {tittle_name}
          </h1>
        </header>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gray-100">
        {cardsection.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center space-y-3 hover:shadow-xl transition"
          >
            <h1 className="text-2xl font-semibold text-slate-800">
              {e.course}
            </h1>

            <p className="text-gray-600">
              Duration: {e.duration}
            </p>

            <p className="text-gray-700 font-medium">
              Fees: {e.fees}
            </p>

            <button className="mt-3 px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              Explore
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tec_Presentaion
