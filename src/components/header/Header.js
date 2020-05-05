import React, { Component } from "react";


export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="hero owl-bg-carousel-yes" id="home">
          <div className="owl-bg-carousel owl-carousel">
            <div className="item full-screen owl-bg-image slider1"></div>
            <div className="item full-screen owl-bg-image slider2"></div>
            <div className="item full-screen owl-bg-image slider3"></div>
            <div className="item full-screen owl-bg-image slider4"></div>
            <div className="item full-screen owl-bg-image slider5"></div>
          </div>
          <div className="hero-body top-slider">
            <div className="text-center hero-text">
              <h1>
                Hello, I'm Rakesh Chouhan <span className="blinker"></span>
              </h1>
              <br />
              <h1 className="small">Sr. Software/IT Consultant</h1>
              <br />
              <br />
              <span className="divider center" style={{ Width: 215 }}></span>
              <p id="fadingProverbs">Wisdom begins with Wonder - Socrates</p>
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
