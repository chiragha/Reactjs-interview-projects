/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import {FaStar} from "react-icons/fa";
import './Rating.css';



function Star ({noOfStars = 5})  {

    const [starRating, setstarRating] = useState(0);
    const [hover, setHover] = useState(0);


    function handleClick(getCurrentIndex){
    setstarRating(getCurrentIndex);
    }

    function mouseMove(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function mouseLeave(getCurrentIndex){
        setHover(starRating);
    }
  return (
   <div>
      <h3 className="title">Star Rating</h3>
     <div className="head">
      
      {
        [...Array(noOfStars)].map((_,index) =>{
              index += 1;
               return <FaStar 
               className={index <= (hover || starRating) ? 'active' : 'inactive'}
               key={index}
               onClick={() => handleClick(index)}
               onMouseMove={ () => mouseMove(index)}
               onMouseLeave={ () => mouseLeave(index)}
               size={50}/>
        })
      }
    </div>
    <footer className="text-center text-black mt-5 text-lg font-semibold">
    <p>&#x3c; &#47; &#x3e; with ❤️ by  <a href="">Shivani Sinha</a>
          <br /> 
          <a href="https://github.com/chiragha/Reactjs-interview-projects" target="_blank">#Reactjs-interview-projects
          </a>
        </p>
      </footer>
   </div>
  )
}

export default Star
