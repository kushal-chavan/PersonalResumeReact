import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const AccoladeItems = (props) => {
  const items = props.accolades.reverse().map((item) => {
    return (
      <React.Fragment key={item.id}>
          <ScrollAnimation offset={10} className="item" animateIn='bounceInUp' animateOnce={true}>
            <i className={"icon-" + item.icon}></i>
            <div className="content">
              <h3>{item.title}</h3>
              <p className="text-grey">{item.body}</p>
            </div>
        </ScrollAnimation>
      </React.Fragment>
    );
  });
  return <React.Fragment>{items}</React.Fragment>;
};

export default AccoladeItems;
