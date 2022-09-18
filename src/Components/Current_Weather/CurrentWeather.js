import React from 'react'
import "./Current-weather.css"

function CurrentWeather() {
  return (
    <div className='weather'>
      <div className='top'>
            <p className='city'>Belgrade</p>
            <p className='type'>Sunny</p>
      </div>
        <img className='weather-icon' alt='weather-icon' src="icons/01d.png"/>
    </div>
  )
}

export default CurrentWeather
