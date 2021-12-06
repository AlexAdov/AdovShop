import React from 'react';
/*Отображает рекламный баннер*/
export function Banner(props){
    return(
        <img className="banner" src={props.image}/>
    );
}
