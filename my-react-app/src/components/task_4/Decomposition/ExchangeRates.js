import React from 'react';
import { ExchangeRatesItem } from './ExchangeRatesItem';
/*Отображает данные о курсах валют в виде списка*/

export function ExchangeRates(props){
    const exchangeRates = props.rates.map((item) => <ExchangeRatesItem {...item} />);
    return(
      <ul className="exchange-rates">
        {exchangeRates}
        <li><a href="#">...</a></li>
      </ul>
    );
}
