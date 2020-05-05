import React from "react";

const QualityItems = (props) => {
  const items = props.quality.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="item col-md-4 col-sm-4 match-height top dark-bg">
          <div className="inner-content">
            <i className={'colored-text icon-'+item.icon}></i>
            <h4>{item.id}. {item.title}</h4>
            <p className="text-grey">{item.body}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div>{items}</div>;
};

export default QualityItems;
