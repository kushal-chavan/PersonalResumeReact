import React, { Component } from "react";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Qualities from "../qualities/Qualities";
import Resume from "../resume/Resume";
import Clients from "../clients/Clients";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Loader from '../loader/loader';
import axios from "axios";
// import Titles from './title.json';
import "./Main.css";

function renderChildComponent() {
  const { title } = this.state;
  const { slider } = this.state;

  if (title && slider) {
    return (
      <React.Fragment>
        <Header title={title.header} slider={slider}/>
        <Profile title={title.profile} />
        <Qualities title={title.qualities} />
        <Resume title={title.resume} />
        <Clients title={title.clients} />
        <Skills title={title.skills} />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  return <Loader/>;
}

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
      slider:undefined
    };
  }
  
  callAPI() {
    axios.get(`https://rakeshchouhan.herokuapp.com/api/slider`).then((res) => {
      setTimeout(()=>{
        this.setState({ slider:res.data });
      }, 500)  
    });
    axios.get(`https://rakeshchouhan.herokuapp.com/api/title`).then((res) => {
      this.setState({ title: res.data[0] });
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return <React.Fragment>{renderChildComponent.call(this)}</React.Fragment>;
  }
}

export default Main;
