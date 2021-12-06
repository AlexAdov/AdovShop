import React from 'react';
/*Отображает телепрограмму в списке телепрограмм*/

export function TVWidgetItem(props){
    return(
         <li>
          <a href={props.link}>
           <span className="tv__onair">{props.onair} </span>
           <span className="tv__program">{props.program} </span>
           <span className="tv__channel">{props.channel}</span>
          </a>
         </li>
    );
}
