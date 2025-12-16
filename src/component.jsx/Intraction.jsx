const Intraction = () => {

    let increase = 0
    const handlingOnclik = () => {

        increase++
        console.log(increase)
        alert(increase)

    }
    let degreement = ""
    const handlingDegrees = () => {
        degreement = (increase - 1)
        console.log(degreement)
    }

const handlingsumbit=(e)=>{
    const Forms=e.target.value
   
    console.log(Forms);
    
}

const handlingchange =(e)=>{
       const values= e.target.value
        alert(values)
       console.log(values);
       
}


    return (
        <>
            <div onClick={handlingOnclik} className="bg-emerald-300 h-100  ">
                <div className="text-center text-5xl">
                    <h1 className="">increement <span className="text-2xl">click any where</span></h1>
                </div>
                {/* button on click */}
                <div className="flex justify-center items-center mt-6 rounded-2xl">
                    <button onClick={handlingDegrees} className="bg-orange-600 text-2xl text-center rounded p-1.5 text-white w-50">decrese click here</button>
                </div>
            </div>
            <div className="bg-amber-600 mt-5 min-h-[300px] flex justify-center items-center p-8">
                <form onSubmit={handlingsumbit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-xl w-full max-w-sm" action="#">

                    {/* Name Input */}
                    <input onChange={handlingchange}
                        className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition duration-150"
                        type="text"
                        placeholder="Enter your name"
                    
                    />

                    {/* Email Input */}
                    <input
                        className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition duration-150"
                        type="email"
                        placeholder="Enter your email"
                       
                    />

                    {/* Number Input */}
                    <input
                        className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition duration-150"
                        type="number"
                        placeholder="Your phone number"
                    
                    />

                    {/* Submit Button */}
                    <input
                        className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer transition duration-150 mt-2"
                        type="submit"
                        value="Submit Registration"
                    />
                </form>
            </div>

        </>
    )
}
export default Intraction