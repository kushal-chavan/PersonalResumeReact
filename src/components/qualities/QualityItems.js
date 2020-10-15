import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';


export class QualityItems extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <React.Fragment>
        {this.props.quality.map((item, i) => {
          return (
          <div key={item.id}
            className={
              (i + 1) % 2 === 0
                ? "item col-md-4 col-sm-4 height top dark-bg"
                : "item col-md-4 col-sm-4 height top"
            }
          >
            <div className="inner-content">
              <i className={"colored-text icon-" + item.icon}></i>
              <ScrollAnimation offset={10} animateIn='slideInUp' animateOnce={true}>
              <h4 style={{textTransform: 'uppercase', marginTop: '15px'}}>
                {i + 1}. {item.title}
              </h4>
              </ScrollAnimation>
              <p className="text-grey">{item.body}</p>
            </div>
          </div>
          )
        })}
      </React.Fragment>
    );
  }
}
export default QualityItems;
