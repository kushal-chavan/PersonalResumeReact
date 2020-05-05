import React, { Component } from "react";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Qualities from "../qualities/Qualities";
import Resume from "../resume/Resume";
import Clients from "../clients/Clients";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Qualities />
        <Resume />
        <Clients />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
