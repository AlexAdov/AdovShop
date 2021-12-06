import React from 'react';
/* Отображает картинку, заголовок, подзаголовок и ссылку на актуальный контент */

export function Featured(props) {
    const { link, image, title, text  } = props;
    return(
        <div className="featured">
            <a href={link}>
            <img className="featured__image" src={image} />
            </a>
            <h5><a href={link}>{title}</a></h5>
          <p>{text}</p>
        </div>
    );
}
