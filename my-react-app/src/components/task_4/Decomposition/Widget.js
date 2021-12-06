import React from 'react';

/*Шаблон для виджетов*/
export function Widget(props){
    return(
        <div className="widget">
          <h5 className="widget__title">
            <a href={props.link}>{props.title}</a>
          </h5>
          {props.children}
        </div>
    );
}
