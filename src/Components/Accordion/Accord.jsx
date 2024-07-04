/* eslint-disable react/prop-types */
import { useState } from "react"

function Accord ({title, answer})  {

    const[accordOpen, setaccordOpen] = useState(false);
  return (
 <div className="my-6 h-full ">

       <div className="py-2 w-full bg-green-500 px-5 rounded-lg">
      <div className="flex justify-between w-full">
        <p>{title}</p>
        <button onClick={() => setaccordOpen(!accordOpen)} className="font-bold text-lg">
          {accordOpen ? <span className="text-lg">-</span> :  <span className="text-lg">+</span> }
           
        </button>
    </div> 
       </div>


    <div className="">
        <div className={`grid text-lg px-5  py-2 rounded-lg w-full overflow-hidden transition-all duration-300 ease-in-out bg-slate-500 text-white ${
          accordOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
            <p className="overflow-hidden">{answer}</p>
        </div>
   </div>

 </div>

    
  )
}

export default Accord
