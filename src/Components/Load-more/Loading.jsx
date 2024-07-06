/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react"
import './Style.css';

function Loading  () {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(6);

    const fetchFunc = () =>{
            setVisible((prevValue)  => prevValue*2);
    };

    useEffect(() =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setItems(data))
    },[]);


  return (
    <div className="">
    <div className="load">
     
            {
                items.slice(0,visible).map((item) => (
                   <div className="cardL">
                     <>
                  <div className="id">
                  <h3 className="title1">{item.title}</h3>
                  </div>
                    <p>{item.body}</p>
                    </>
                   </div>
                ))
            }
          
           
            <button className="btn" onClick={fetchFunc}>Load More</button>
       
    </div>
    </div>
  )
}

export default Loading