/* eslint-disable react/prop-types */





function Modal({onClose}) {
    
  return (

    <div className="">
      <div className="bg-[#19172e] text-white border rounded-md border-green-500 max-w-2xl text-center items-center mx-auto my-10 ">
       <div className="">
       <h2 className="text-4xl my-1 underline text-center text-white" >Custom-Modal</h2>
       
       </div>
        <div className="my-6">
        <h2 className="text-4xl my-3" >Welcome to My-Field</h2>
        <p>&#x3c; &#47; &#x3e; with ❤️ by  <a href="">Shivani Sinha</a>
          <br /> 
          <a href="https://github.com/chiragha/Reactjs-interview-projects" target="_blank">#Reactjs-interview-projects
          </a>
        </p>
        </div>

        <button onClick={() => onClose()} className="bg-red-500 p-3 rounded-md my-3">Close</button>
      </div>
    </div>
  )
}

export default Modal
