import React, { Component } from "react";
import { Film } from "./Film";

export function Films({list}) {
    const films = list.map(film => <Film key={film.id} info={film} />);
    return (
      <div className="container">
        {films}
      </div>
    );
  }