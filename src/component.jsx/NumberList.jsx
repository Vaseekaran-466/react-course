import { useState } from "react";

const NumberList = () => {
  const [listnum, setListnum] = useState([]);

  const handleclick = () => {
    setListnum([...listnum, Math.floor(Math.random() * 100)]);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">

        <button
          onClick={handleclick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Generate Random Number
        </button>

        <div className="text-3xl font-bold">
          {listnum.map((e, i) => (
            <h1 key={i}>{e}</h1>
          ))}
        </div>

      </div>
    </>
  );
};

export default NumberList;
