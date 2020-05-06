import React from "react";

const MilestoneItems = (props) => {
  const items = props.milestones.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="item col-md-3 col-sm-6">
          <div className="circle">
            <i className={"icon-" + item.icon}></i>
          </div>
          <span
            className="number"
            data-from={item.count_from}
            data-refresh-interval={item.interval}
            data-to={item.count_to}
          >
            {item.static_count}
          </span>
          <h4>{item.title}</h4>
        </div>
      </React.Fragment>
    );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default MilestoneItems;
