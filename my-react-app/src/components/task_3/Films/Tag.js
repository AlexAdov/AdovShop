import React, { Component } from "react";


export function Tag({title, color}) {
    return (
      <span className={`card-media-tag card-media-tag-${color}`}>{title}</span>
    );
  }