import React, { Component } from "react";

export class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <iframe
          title="blog"
          src="https://chouhans.wordpress.com/"
          style={{
            height: '100%', 
            width: '100%',
            position: 'absolute', 
            left: '0px', 
            overflow: 'hidden',
            borderWidth: '0px'
          }}
        ></iframe>
      </React.Fragment>
    );
  }
}

export default Blog;
