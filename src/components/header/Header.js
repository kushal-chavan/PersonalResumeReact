import React, { Component } from "react";
import "./Header.css";
import axios from "axios";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      sliders: [],
      proverbs: [],
      start: 0,
      end: 1,
      trans: "animated fadeIn",
    };
  }
  componentDidMount() {
    axios.get(`https://rakeshchouhan.herokuapp.com/api/proverbs`).then((res) => {
      this.setState({ proverbs: res.data[0].inspirationalProverbs });
    });
    axios.get(`https://rakeshchouhan.herokuapp.com/api/slider`).then((res) => {
      this.setState({ sliders:res.data });
    });
    this.interval = setInterval(
      () =>
        this.setState({
          start: this.state.start + 1,
          end: this.state.end + 1,
        }),
      7000
    );
    this.interval = setInterval(
      () =>
        this.setState({
          trans: "animated fadeOut",
        }),
      6900
    );
    this.interval = setInterval(
      () =>
        this.setState({
          trans: "animated fadeIn",
        }),
      7000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <React.Fragment>
        <header className="hero owl-bg-carousel-yes" id="home">
          <div className="owl-bg-carousel owl-carousel">
            {this.state.sliders.map((slider) => {
              return (
                <div
                  key={slider.id}
                  className="item full-screen owl-bg-image"
                  style={{ backgroundImage: 'url(' + slider.image + ')' }}
                ></div>
              );
            })}
          </div>
          <div className="hero-body top-slider">
            <div className="text-center hero-text">
              <h1>
                {this.props.title.title} <span className="blinker"></span>
              </h1>
              <br />
              <h1 className="small">{this.props.title.tagline}</h1>
              <br />
              <br />
              <span className="divider center" style={{ Width: 215 }}></span>
              {this.state.proverbs
                .slice(this.state.start, this.state.end)
                .map((proverb, index) => {
                  return (
                    <p key={index} className={this.state.trans}>
                      {proverb}
                    </p>
                  );
                })}
              <div className="page-scroll">
                <a href="#profile" className="btn btn-custom btn-lg">
                  Know Me Better
                </a>
              </div>
            </div>
          </div>
        </header>
        <nav
          className="center-menu navbar navbar-fixed-top"
          id="navigation"
          role="navigation"
        >
          <div className="container navbar-container">
            <div className="page-scroll navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-target=".Chouhan-collapse"
                data-toggle="collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a
                href="#page-top"
                className="navbar-brand visible-sm visible-xs"
              >
                Chouhan
              </a>
            </div>
            <div className="collapse Chouhan-collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="page-scroll">
                  <a href="#home">Home</a>
                </li>
                <li className="page-scroll">
                  <a href="#profile">I AM</a>
                </li>
                <li className="page-scroll">
                  <a href="#qualities">Qualities</a>
                </li>
                <li className="page-scroll">
                  <a href="#resume">Resume</a>
                </li>
                <li className="page-scroll">
                  <a href="#clients">Clients</a>
                </li>
                <li className="page-scroll">
                  <a href="#skills">Skills</a>
                </li>
                <li className="page-scroll">
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
