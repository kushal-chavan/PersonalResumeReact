import React, { Component } from "react";
import Header from "./Header";
import Profile from "./Profile";
import Quality from "./Quality";
import Resume from "./Resume";
import Clients from "./Clients";
import Skilles from "./Skilles";
import Contact from "./Contact";
import Footer from "./Footer";

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Quality />
        <Resume />
        <Clients />
        <Skilles />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
