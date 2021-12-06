import React from 'react';
/*Отображает навигационную панель над строкой поиска*/
export function SearchMenu() {
    const menuItems = [
        {link:"#", name:"Видео"},
        {link:"#", name:"Картинки"},
        {link:"#", name:"Новости"},
        {link:"#", name:"Карты"},
        {link:"#", name:"Маркет"},
        {link:"#", name:"Переводчик"},
        {link:"#", name:"Эфир"}
    ];
    return(
        <ul className="search__menu">
          {menuItems.map((item) =>
           <li><a href={item.link}>{item.name}</a></li>
          )}
          <li href="#">ещё</li>
        </ul>
    );
}
