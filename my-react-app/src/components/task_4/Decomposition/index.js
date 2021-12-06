import React from "react";
import { Featured } from "./Featured";
import { News } from "./News";
import { ExchangeRates } from "./ExchangeRates";
import { SearchMenu } from "./SearchMenu";
import { SearchBar } from "./SearchBar";
import { Banner } from "./Banner";
import { Widget } from "./Widget";
import { WeatherWidget } from "./WeatherWidget";
import { TVWidgetItem } from "./TVWidgetItem";
import { PopularWidgetItem } from "./PopularWidgetItem";

export function Decomposition() {
   const rates = [
      { currency: "USD MOEX", rate: 63.52, growth: "+0.09", link: "#" },
      { currency: "EUR MOEX", rate: 70.86, growth: "+0.14", link: "#" },
      { currency: "НЕФТЬ", rate: 64.90, growth: "+1.63%", link: "#" },
   ];

   const news = [
      {
         link: "#",
         icon: "icon",
         text: "Путин упростил получение автомобильных номеров",
      },
      {
         link: "#",
         icon: "icon",
         text: "В команде Зеленского раскрыли план реформ на Украине",
      },
   ];

   const tv = [
      {
         onair: "02.00",
         program: "ТНТ.Best",
         channel: "ТНТ International",
         link: "#",
      },
      {
         onair: "02.15",
         program: "Джинглики",
         channel: "Карусель INT",
         link: "#",
      },
      {
         onair: "02.25",
         program: "Наедине со всеми",
         channel: "Первый",
         link: "#",
      },
   ];

   const onAir = [
      {
         onair: "→",
         program: "Управление как искусство",
         channel: "Успех",
         link: "#",
      },
      {
         onair: "→",
         program: "Ночь. Мир в это время",
         channel: "earthTV",
         link: "#",
      },
      {
         onair: "→",
         program: "Андрей Вознесенский",
         channel: "Совершенно секретно",
         link: "#",
      },
   ];

   const popular = [
      { theme: "Недвижимость", subtheme: "о сталинках", link: "#" },
      { theme: "Маркет", subtheme: "люстры и светильники", link: "#" },
      { theme: "Авто.ру", subtheme: "привод 4x4 до 500 000", link: "#" },
   ];
   return (
      <>
      <div className="yandex">
         <div className="top-panel">
            <div className="news-column">
               <News news={news} />
               <ExchangeRates rates={rates} />
            </div>
            <Featured
               title="Работа над ошибками"
               text="Смотрите на Яндексе и запоминайте"
               image=".."
               link="#"
            />
         </div>
         <SearchMenu />
         <SearchBar />
         <Banner image="#" />
         <div className="widgets">
            <div className="widgets-col">
               <WeatherWidget
                  icon="#"
                  mainLink="#"
                  mainTemp="+17"
                  currentLink="#"
                  currentName="Утром"
                  currentTemp="+17"
                  nextLink="#"
                  nextName="Днём"
                  nextTemp="+20"
               />
               <Widget title="Посещаемое" link="#">
                  <ul>
                     {popular.map((item) => (
                        <PopularWidgetItem {...item} />
                     ))}
                  </ul>
               </Widget>
            </div>
            <div className="widgets-col">
               <Widget title="Карта Германии" link="#">
                  <a href="#">Расписания</a>
               </Widget>
               <Widget title="Телепрограмма">
                  <button className="button_onair">Эфир</button>
                  <ul>
                     {tv.map((item) => (
                        <TVWidgetItem {...item} />
                     ))}
                  </ul>
               </Widget>
            </div>
            <div className="widgets-col">
               <Widget title="Эфир" link="#">
                  <ul>
                     {onAir.map((item) => (
                        <TVWidgetItem {...item} />
                     ))}
                  </ul>
               </Widget>
            </div>
         </div>
         </div>
      </>
   );
}
