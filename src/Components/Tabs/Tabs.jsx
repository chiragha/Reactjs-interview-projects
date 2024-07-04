
import { useState } from "react";
import "./Tab.css";


function Tabs  ()  {

    const [toggleState, setToggleState] = useState(1);

    function toggleTab(index){
        setToggleState(index);
    }
  return (
    <div className="container max-w-full mx-auto items-center">
       <div className="tab ">
  <button onClick={()=> toggleTab(1)} className={toggleState === 1 ? "tablinks active-tab" : "tablinks"}>London</button>
  <button onClick={()=> toggleTab(2)} className={toggleState === 2 ? "tablinks active-tab" : "tablinks"}>Paris</button>
  <button onClick={()=> toggleTab(3)} className={toggleState === 3 ? "tablinks active-tab" : "tablinks"}>Tokyo</button>
</div>

        <div className="text-center">

        <div id="London" className={toggleState === 1 ? "tabcontent active-content" : "tabcontent"}>
  <h3 className="text-3xl text-yellow-500">London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" className={toggleState === 2 ? "tabcontent active-content" : "tabcontent"}>
  <h3 className="text-3xl text-yellow-500">Paris</h3>
  <p>Paris is the capital of France.</p>
</div>

<div id="Tokyo" className={toggleState === 3 ? "tabcontent active-content" : "tabcontent"}>
  <h3 className="text-3xl text-yellow-500">Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>
        </div>

        <footer className="text-center text-black mt-20">
        <p>&#x3c; &#47; &#x3e; with ❤️ by  <a href="">Shivani Sinha</a>
          <br /> 
          <a href="https://github.com/chiragha/Reactjs-interview-projects" target="_blank">#Reactjs-interview-projects
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Tabs