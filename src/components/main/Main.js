import React, { Component } from "react";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import Qualities from "../qualities/Qualities";
import Resume from "../resume/Resume";
import Clients from "../clients/Clients";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Blog from "../blog/Blog";
import Loader from '../loader/loader';
import axios from "axios";
import { API_URL } from '../../constants'
// import Titles from './title';
import "./Main.css";

function renderChildComponent() {
  const { slider, title, blogType } = this.state;

  const selectBlog = event => {
    this.setState({blogType: event})
  }

  if (title && slider) {
    return (
      <React.Fragment>
        {!blogType && 
          <>
          <Header title={title.header} slider={slider} blog={selectBlog}/>
          <Profile title={title.profile} />
          <Qualities title={title.qualities} />
          <Resume title={title.resume} />
          <Clients title={title.clients} />
          <Skills title={title.skills} />
          <Contact />
          <Footer />
          </>
        }
        {blogType && <Blog blogType={blogType}/>}
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
      slider:undefined,
      blogType: ''
    };
  }
  
  callAPI() {
    axios.get(`${API_URL}/slider`).then((res) => {
      setTimeout(()=>{
        this.setState({ slider:res.data });
      }, 500)  
    });
    axios.get(`${API_URL}/title`).then((res) => {
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
