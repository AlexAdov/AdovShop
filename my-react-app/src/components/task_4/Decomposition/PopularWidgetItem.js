import React from 'react';
/*Отображает одну популярную тему в списке популярных тем*/
export function PopularWidgetItem(props){
    return(
        <li>
          <a href={props.link}>
           <span className="popular__theme">{props.theme} </span>
           <span className="popular__subtheme">- {props.subtheme}</span>
          </a>
        </li>
    );
}
