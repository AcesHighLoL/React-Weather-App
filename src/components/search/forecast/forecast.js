import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import './forecast.css' 


const WEEK_DAYS =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) =>{
    const dayOfWeek = new Date().getDay();
    const forecastOfWeek = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayOfWeek));
    
    return (
    <>
        <label className="title">Daily Forecast</label>
        <Accordion allowMultipleExpanded>
            {data.list.splice(0,7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                                <label className="day">{forecastOfWeek[index]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)}°F / {" "}{Math.round(item.main.temp_max)}°F</label>
                        </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label>Pressure:</label>
                                <label>{item.main.pressure}ATM</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humidity:</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Clouds:</label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Wind speed:</label>
                                <label>{item.wind.speed} MPH</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Feels like:</label>
                                <label>{Math.round(item.main.feels_like)}°F</label>
                            </div>
                        </div> 
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
    );
}

export default Forecast;