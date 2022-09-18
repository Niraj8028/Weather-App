import React from 'react'
import "./Current-weather.css"

function CurrentWeather() {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>Belgrade</p>
                    <p className='type'>Sunny</p>
                </div>

                <img className='weather-icon' alt='weather-icon' src="icons/01d.png" />

            </div>

            <div className='bottom'>
                <p className='temperature'>18°C</p>
                <div className='Details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>18°c</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>2 m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>18%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>18hpa</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CurrentWeather
