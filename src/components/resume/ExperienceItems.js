import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const ExperienceItems = (props) => {
  const items = props.experience.reverse().map((item) => {
    return (
      <React.Fragment key={item._id}>
          <ScrollAnimation offset={10} className="resume-item" animateIn='bounceInUp' animateOnce={true}>
            <div className="resume-year">
              <span className="resume-year">{item.year}</span>
            </div>
            <div className="resume-btn">
              <a href={'#work'+item._id} data-parent="#work" data-toggle="collapse">
                {null}
              </a>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <div className="panel-title">
                  <h4 className="resume-title">{item.title}</h4>
                  <br/>
                  <span>{item.body}</span>
                </div>
              </div>
            </div>
        </ScrollAnimation>
      </React.Fragment>
    );
  });

  return <div>{items}</div>;
};

export default ExperienceItems;
