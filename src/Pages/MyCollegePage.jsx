import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from "react";

import '@smastrom/react-rating/style.css';

const MyCollegePage = () => {
    const [rating, setRating] = useState(0);
   const [data, setData] =  useState([]);

  useEffect(() => {
    fetch("https://college-bazar-server.vercel.app/datababe_to_myCollegePage")
      .then((response) => response.json())
      .then((data) => {
        console.log("data received from database")
        setData(data);
      });
   
}, []);


  return (<div>
      
    
    <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
      isRequired
    />

    <p className='text-2xl font-semibold text-white'>You rated: {rating} star!</p>

  </div>)
};

export default MyCollegePage;
