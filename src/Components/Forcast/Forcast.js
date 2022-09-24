import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function Forcast({ data }) {
    const dayInWeek = new Date().getDay();
    const ForcastDays = WeekDays.slice(dayInWeek, WeekDays.length).concat(WeekDays.slice(0,dayInWeek));
    console.log(ForcastDays);
    return (
        <div>
            <label className='tittle'>Daily</label>
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
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>



        </div>
    )
}

export default Forcast
