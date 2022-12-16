import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
import "animate.css";
import { Link } from 'react-scroll';
import { API_URL, ARK_BLOG_URL } from '../../constants';
import Slider from './slider';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      sliders: [],
      proverbs: [],
      header: '',
      start: 0,
      end: 1,
      trans: "animated fadeIn",
    };
  }

  callAPI(){
    axios.get(`${API_URL}/proverbs`).then((res) => {
      this.setState({ proverbs: res.data[0].inspirationalProverbs });
    });
  }

  handleScroll = () =>  {
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
    
    const scrolled = winScroll;

    if(scrolled >= 980 && window.innerWidth > 760){
      this.setState({header:'fixed'})
    } else if(window.innerWidth > 760) {
      this.setState({header:'relative'})
    } else {
      this.setState({header:''})
    }
  }


  componentDidMount() {  
    window.addEventListener('scroll', this.handleScroll, true);
    this.callAPI();
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
        <header className="hero" id="home">
            <Slider slider={this.props.slider}/>
          <div className="hero-body"> 
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
                <Link to="profile" smooth={true} duration={1500} className="btn btn-custom btn-lg">
                  Know Me Better
                </Link>
              </div>
            </div>
          </div>
        </header>
        <nav
          className="center-menu navbar navbar-fixed-top"
          id="navigation"
          role="navigation"
          style={{position:this.state.header}}
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
              <ul id="link-navbar" className="nav navbar-nav">
                <li className="page-scroll">
                  <Link to="home" data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-65} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}
                  >Home</Link>
                </li>
                <li className="page-scroll">
                  <Link to="profile" 
                  data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-65} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}>I AM</Link>
                </li>
                <li className="page-scroll">
                  <Link to="qualities" 
                  data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-70} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}
                  >Qualities</Link>
                </li>
                <li className="page-scroll">
                  <Link to="resume" 
                  data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-50} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}
                  >Resume</Link>
                </li>
                <li className="page-scroll">
                  <Link to="clients" 
                  data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-50} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}
                  >Clients</Link>
                </li>
                <li className="page-scroll">
                  <Link to="skills" 
                  data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-50} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}
                  >Skills</Link>
                </li>
                <li className="page-scroll">
                  <Link to="contact" 
                  data-target=".Chouhan-collapse"
                  data-toggle="collapse" 
                  smooth={true} 
                  activeClass="selected" 
                  spy={true} 
                  offset={-60} 
                  duration={1000} 
                  style={{cursor: 'pointer'}}
                  >Contact</Link>
                </li>
                <li>
                  <a onClick={() => this.props.blog('blog')} href="#blog">Blog</a>
                </li>
                <li>
                  <a href={ARK_BLOG_URL} target="_blank">ARK Blog</a>
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
