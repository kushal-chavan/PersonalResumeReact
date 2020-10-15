import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const EducationItems = (props) => {
  const items = props.educations.reverse().map((item, index) => {
    return (
    <React.Fragment key={item._id}>
     <ScrollAnimation offset={10} className="resume-item" animateIn='bounceInUp' animateOnce={true}>
          <div className="resume-year">
            <span className="resume-year">{item.duration}</span>
          </div>
          <div className="resume-btn">
            <a
              href={'#education' + item.id}
              data-parent="#education"
              data-toggle="collapse"
              className={index === 0 ? '' : 'collapsed'}
            >
              {null}
            </a>
          </div>
          <div className="panel">
            <div className="panel-heading">
              <div className="panel-title">
                <h4 className="resume-title">{item.title}</h4>
                <br />
                <h6 className="college-title">- {item.tagline}</h6>
              </div>
            </div>
            <div className={index === 0 ? 'collapse panel-collapse in' : 'collapse panel-collapse'} id={'education' + item.id}>
              <div className="text-grey panel-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </React.Fragment>
    );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default EducationItems;
