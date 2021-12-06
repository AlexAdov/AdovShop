import React from 'react';
import { Date } from './Date';
import { NewsList } from './NewsList';
import { NewsFilter } from './NewsFilter';


/*Отображает список новостей в зависимости от выбранного таба-фильтра. Передаёт
 обработчик выбора и выбранный таб в NewsFilter, передаёт выбранный список новостей в NewsList*/


export function News(props){
  function onSelect(){
   
  }
  return(
    <div className="news">
      <div className="news__nav">
       <NewsFilter selected={"Сейчас в СМИ"} onSelect={onSelect} />
       <Date />
      </div>
      <NewsList news={props.news} />
    </div>
  );
}
