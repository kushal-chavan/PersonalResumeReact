import React from "react";

const ClientItems = (props) => {
  const items = props.clients.reverse().map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="item">
          <div className="animated" data-animation-effect="flipInX">
            <div className="hidden-xs profile">
              <img
                alt=""
                className="img-responsive img-thumbnail"
                src={item.image}
              />
            </div>
            <div className="content">
              <h3>{item.title}</h3>
              <p className="detail">{item.body}</p>
              <p className="source">
                {item.position}
                <br />
                <span>{item.duration}</span>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default ClientItems;
