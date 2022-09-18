import React from 'react'
import "./Current-weather.css"

function CurrentWeather({data}) {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.name}</p>
                    <p className='type'>{data.weather[0].main}</p>
                </div>

                <img className='weather-icon' alt='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>

            </div>

            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='Details'>
                    <div className='parameter-row'>
                        <span className='detail-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{Math.round(data.main.pressure)}hpa</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CurrentWeather
