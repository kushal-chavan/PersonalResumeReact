import React, { Component } from "react";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Qualities from "../qualities/Qualities";
import Resume from "../resume/Resume";
import Clients from "../clients/Clients";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Titles from './title.json';
import './Main.css';


export class Main extends Component {
  state = {
    title: Titles
  }

  render() {
  
    return (
        <React.Fragment>
            <Header title={this.state.title.header} />
            <Profile title={this.state.title.profile}/>
            <Qualities title={this.state.title.qualities}/>
            <Resume title={this.state.title.resume}/>
            <Clients title={this.state.title.clients}/>
            <Skills title={this.state.title.skills}/>
            <Contact/>
            <Footer />
        </React.Fragment>
    );
  }
}

export default Main;
