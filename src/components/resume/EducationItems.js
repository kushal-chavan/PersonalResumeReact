import React from "react";

const EducationItems = (props) => {
  const items = props.educations.reverse().map((item) => {

    return (

      <React.Fragment key={item.id}>
        <div className="resume-item">
          <div className="resume-year">
            <span className="resume-year">{item.duration}</span>
          </div>
          <div className="resume-btn">
            <a
              href={'#education' + item.id}
              data-parent="#education"
              data-toggle="collapse"
              className={'collapsed'}
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
            <div className="collapse panel-collapse in" id={'education' + item.id}>
              <div className="text-grey panel-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default EducationItems;
