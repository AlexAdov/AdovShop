import React from 'react';
/*Отображает логотип, строку поиска и кнопку "Найти"*/
export function SearchBar(){
    return(
        <div>
          <img src="" className="logo" />
          <div className="search">
            <form>
              <input className="search__bar" type="search" name="search" />
              <input className="search__button" type="submit" name="submit" value="Найти" />
            </form>
            <p>Найдётся всё. Например<span> фазы луны сегодня</span></p>
          </div>
        </div>
    );
}
