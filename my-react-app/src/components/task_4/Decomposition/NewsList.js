import React from 'react';
import { NewsItem } from './NewsItem';

/*Отображает полученный от News список новостей*/
export function NewsList(props) {
    const newsItems = props.news.map((item) => <NewsItem {...item} />);
    return(
        <ul className="news__list">
         {newsItems}
        </ul>
    );
}
