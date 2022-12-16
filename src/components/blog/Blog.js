import React, { Component } from "react";
import { BLOG_URL, ARK_BLOG_URL } from '../../constants';

export class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <iframe
          title="blog"
          src={this.props.blogType === 'blog' ? BLOG_URL:''}
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
