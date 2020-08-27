import React from "react";

const KnownledgeItems = (props) => {
  const items = props.knowledge.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="col-sm-6 col-md-6">
          <div className="bar-chart">
            <div className="item">
              <h4>{item.title}</h4>
              <div className="bar">
                <span className="percent"
                // style={{left:item.percent * 5 +'px'}}
                >{item.percent}%</span>{" "}
                <span
                  className="item-progress"
                  data-percent={item.percent}
                  // style={{width:item.percent * 5 +'px'}}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <React.Fragment>{items}</React.Fragment>;
};

export default KnownledgeItems;
