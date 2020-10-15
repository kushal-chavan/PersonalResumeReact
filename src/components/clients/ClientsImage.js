import React from "react";

const ClientsImages = (props) => {
  const items = props.clients.map((item) => {
    return ( <React.Fragment key={item._id}><li><img alt="" className="img-responsive" src={item.image} /></li></React.Fragment>  );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default ClientsImages;
