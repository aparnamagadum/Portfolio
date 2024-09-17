import React from 'react'
import './HomeContainer.css'
function HomeContainer({title1,title2,title3 ,image}) {
  return (
    <div className='home-container'>
      <div className='left-container'>
        <h1>{title1}</h1>
        <h1>{title2}</h1>
        <h2>{title3}</h2>
      </div>
      <div className='right-container'>
        <img className='img' src={image} alt="" />
      </div>
    </div>
  )
}

export default HomeContainer
