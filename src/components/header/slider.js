import React, { Component } from 'react';  
import './Header.css';

export class Slider extends Component {  
componentDidMount(){
    setInterval(() => {
      if(document.getElementById("slider-click")) {
        document.getElementById("slider-click").click();
      }
    }, 10000)
}

render(){  
    return (  
      <div style={{zIndex:11, opacity:0.6}} id="myCarousel" className="carousel slide slider-view" data-ride="carousel">
      <ol className="carousel-indicators">
        {this.props.slider.map((slider, index) => {
            return (
              <li key={slider.id} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? 'active':''}></li>
            );
        })}
      </ol>
      <div className="carousel-inner">
      {this.props.slider.map((slider, index) => {
            return (
              <div key={slider.id} className={index === 0 ? 'item active':'item'}>
                <img src={slider.image} alt=""/>
              </div>
            );
        })}
      </div>
      <a className="left carousel-control hideOnDesktop" href="#myCarousel" data-slide="prev">
        <span className="arrow-left icon-Arrow-OutLeft"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control hideOnDesktop" href="#myCarousel" data-slide="next">
        <span id="slider-click" className="arrow-right icon-Arrow-OutRight"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )  
  }  
}  

export default Slider