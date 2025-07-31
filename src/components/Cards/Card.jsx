import React, { useState, useEffect } from 'react'
import './Card.css'
import pcard from '../../assets/purple-cards/pcard.js'
import wcard from '../../assets/transparent/cw.js'


const Card = ({ c=pcard,imagePerSlide = 5 }) => {

  
  

  const [index, setIndex] = useState(0);
  const totalSlides = Math.ceil(c.length / imagePerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      // modulo operator % returns the remainder after division.
      //If you do 0 % 3 → 0

      // If you do 1 % 3 → 1

      // If you do 2 % 3 → 2

      // If you do 3 % 3 → 0 ✅ ← this is what resets it back to start!
      setIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const start = index * imagePerSlide;
  const cardCount = c.slice(start, start + imagePerSlide);

  return (
    <div className="card-list">
      {cardCount.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={card.image} alt="imageofcard" />
          </div>
        )
      })}
    </div>
  )
}

export default Card

// import React from 'react';
// import './Card.css';
// import pcard from '../../assets/purple-cards/pcard.js';

// const Card = () => {
//   return (
//     <div className="card-list">
//       {pcard.map((card, index) => (
//         <div className="card" key={index}>
//           <img src={card.image} alt={`Card ${index}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;