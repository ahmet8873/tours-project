import React from 'react'
import { useState } from 'react'

const Tour = ({tour,deleteTour}) => {
    const[readmore,setReadmore]=useState(false)

  return (
    <div className='single-tour'>
        <img src={tour.image} alt={tour.name} />
        <footer>
            <div className="tour-info">
                <h4 className='tour-name'> {tour.name}</h4>
                <h4 className='tour-price'> ${tour.price}</h4>
            </div>
            <p className="info">{ readmore? tour.info :`${tour.info.substring(0,200)}...`}
             <button className='show-more-btn' onClick={()=>{setReadmore(!readmore)}}>
                {readmore?'show less':'read more'}
            </button>
            </p>
           
            <button className="delete" onClick={()=>deleteTour(tour.id)}>Not Interested</button>
        </footer>
    </div>
  )
}

export default Tour