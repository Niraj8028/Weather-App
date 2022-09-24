import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import './Forcast.css'

const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function Forcast({ data }) {
    const dayInWeek = new Date().getDay();
    const ForcastDays = WeekDays.slice(dayInWeek, WeekDays.length).concat(WeekDays.slice(0,dayInWeek));
    console.log(ForcastDays);
    return (
        <div>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) =>
                (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='day'>{ForcastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details'>
                                <div className='daily-details-item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-item'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-item'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-item'>
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} Km/h</label>
                                </div>
                                <div className='daily-details-item'>
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className='daily-details-item'>
                                    <label>Feels Like</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                                
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>



        </div>
    )
}

export default Forcast
