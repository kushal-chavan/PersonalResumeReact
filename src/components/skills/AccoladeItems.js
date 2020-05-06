import React from "react";

const AccoladeItems = (props) => {
  const items = props.accolades.reverse().map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="item">
          <i className={"icon-" + item.icon}></i>
          <div className="content">
            <h3>{item.title}</h3>
            <p className="text-grey">{item.body}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default AccoladeItems;
