import React from 'react';
/*Отображает данные по одной валюте в списке курсов валют:валюту, курс, прирост и ссылку*/
export function ExchangeRatesItem(props){
    const { link, currency, rate, growth } = props;
    return(
       <li className="exchange-rates__item">
         <a href={link}>{currency} </a>
          {rate}
         <span> {growth}</span>
       </li>
    );
}
