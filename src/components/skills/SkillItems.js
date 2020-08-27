import React from "react";

const SkillItems = (props) => {
  const items = props.skills.map((item) => {
    return (
      <React.Fragment key={item.id}>

        <div className="col-sm-4 col-md-2">
          <div className="item">
            <div className="circle">
              <span
                className="item-progress"
                data-percent={item.percent}
                // style={{height: count+'px'}}
              ></span>
            </div>
            <span className="percent">{item.percent}%</span>
            <h4 className="text-center">{item.skill}</h4>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default SkillItems;
