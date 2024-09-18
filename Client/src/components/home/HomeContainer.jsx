import React from 'react'
import './HomeContainer.css'
function HomeContainer({title2,title3 ,image}) {
  return (
    <div className='home-container'>
      <div className='left-container'>
        <h1><i>{title2}</i></h1>
        <h2><i>{title3}</i></h2>
      </div>
      <div className='right-container'>
        <img className='img' src={image} alt="" />
      </div>
    </div>
  )
}

export default HomeContainer
