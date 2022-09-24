import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

function Forcast({ data }) {
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
