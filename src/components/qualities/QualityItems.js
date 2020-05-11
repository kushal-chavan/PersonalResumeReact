import React from "react";

const QualityItems = (props) => {
  const items = props.quality.map((item, index) => {
    return (
      <React.Fragment key={item.id}>
        <div className={(index + 1)%(2) === 0 ? 'item col-md-4 col-sm-4 match-height top dark-bg': 'item col-md-4 col-sm-4 match-height top'}>
          <div className="inner-content">
            <i className={'colored-text icon-'+item.icon}></i>
            <h4>{index + 1 }. {item.title}</h4>
            <p className="text-grey">{item.body}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div>{items}</div>;
};

export default QualityItems;
