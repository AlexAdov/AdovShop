import React from 'react';
import { Widget } from './Widget';
/*Отображает среднюю температуру в течение дня, температуру в текущее и следующее время суток, картинку, ссылки на более подробные прогнозы*/
export function WeatherWidget(props){
    const { icon, mainLink, mainTemp, currentLink, currentName, currentTemp, nextLink, nextName, nextTemp } = props;
    return(
       <Widget title="Погода" link="#">
         <div className="weather">
           <img src={icon} />
           <span className="weather__main">
             <a href={mainLink}>{mainTemp}</a>
           </span>
           <div className="weather__sidebar">
            <a href={currentLink}>{currentName}{currentTemp},</a>
            <a href={nextLink}>{nextName}{nextTemp}</a>
           </div>
         </div>
       </Widget>
    );
}
