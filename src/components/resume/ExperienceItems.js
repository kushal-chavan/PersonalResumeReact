import React from "react";

const ExperienceItems = (props) => {
  const items = props.experience.reverse().map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="resume-item">
          <div className="resume-year">
            <span className="resume-year">{item.year}</span>
          </div>
          <div className="resume-btn">
            <a href={'#work'+item.id} data-parent="#work" data-toggle="collapse">
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
        </div>
      </React.Fragment>
    );
  });

  return <div>{items}</div>;
};

export default ExperienceItems;
