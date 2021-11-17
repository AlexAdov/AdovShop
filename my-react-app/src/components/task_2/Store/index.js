import React, { Component } from "react";
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "cards",
      icon: "view_module",
    };
    this.toggleView = this.toggleView.bind(this);
  }

  products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];

  toggleView() {
    if (this.state.view === "cards") {
      this.setState({ view: "list" });
    } else {
      this.setState({ view: "cards" });
    }
  }

  render() {
    return (
      <>
        <IconSwitch
          icon={this.state.view === "cards" ? "view_list" : "view_module"}
          onSwitch={this.toggleView}
        />
        {this.state.view === "cards" ? (
          <CardsView items={this.products} />
        ) : (
          <ListView items={this.products} />
        )}
      </>
    );
  }
}
