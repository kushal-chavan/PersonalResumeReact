import React, { Component } from "react";
import shortid from "shortid";


export class QualityItems extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  getRandomKey = () => {
    return shortid.generate();
  }
  
  render() {
    return (
      <React.Fragment>
        {this.props.quality.map((item, i) => {
          return (
          <div key={this.getRandomKey + item.id}
            className={
              (i + 1) % 2 === 0
                ? "item col-md-4 col-sm-4 match-height top dark-bg"
                : "item col-md-4 col-sm-4 match-height top"
            }
          >
            <div className="inner-content">
              <i className={"colored-text icon-" + item.icon}></i>
              <h4>
                {i + 1}. {item.title}
              </h4>
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
