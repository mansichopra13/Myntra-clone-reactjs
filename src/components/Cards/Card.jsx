import React, { useState, useEffect } from 'react'
import './Card.css'
import pcard from '../../assets/purple-cards/pcard.js'
import wcard from '../../assets/transparent/cw.js'

import {Link} from 'react-router-dom'

const Card = ({ c=pcard,imagePerSlide = 5 }) => {

  const [index, setIndex] = useState(0);
  const totalSlides = Math.ceil(c.length / imagePerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      // % returns the remainder after division.
      // 0 % 3 → 0
      // 1 % 3 → 1
      // 2 % 3 → 2
      //3 % 3 → 0  resets back to start
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
            <Link to={card.category}>
              <img src={card.image} alt="imageofcard" />
            </Link>
            
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