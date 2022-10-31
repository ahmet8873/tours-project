import React from 'react'
import Tour from './Tour'

const Tours = ({tours,deleteTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2> 
        <div className='underline'></div>
      </div>
      <div className='tours'>
          {tours.map((tour)=>{
              return <Tour tour={tour} deleteTour={deleteTour} key={tour.id}></Tour>
              })}
      </div>
    </section>
  )
}

export default Tours