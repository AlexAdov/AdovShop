import React from 'react';

/*Отображает отдельную новость:иконку, текст и ссылку*/
export function NewsItem(props) {
    return(
        <li>
          <a href={props.link}>{props.icon} {props.text}</a>
        </li>
    );
}
