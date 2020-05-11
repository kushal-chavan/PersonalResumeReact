import React, { Component } from "react";
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="map">
          <div className="address">
            <h4>Charlotte, NC</h4>
          </div>
          <div id="cd-google-map">
            <div id="google-container"></div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-scroll">
                  <a href="#page-top">
                    <i className="icon-Arrow-Up"></i>
                    {null}
                  </a>
                </div>
                <ul className="list-inline social-icons">
                  <li>
                    <div className="item">
                      <a
                        href="https://www.facebook.com/rakesh.chouhan.9469"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        {null}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <a
                        href="https://www.linkedin.com/in/chouhanrakesh"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                        {null}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <a href="https://github.com/chouhan" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        {null}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <a
                        href="https://plus.google.com/u/0/+RakeshChouhans/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-google-plus"></i>
                        {null}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <a href="http://chouhans.wordpress.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-wordpress" aria-hidden="true"></i>
                        {null}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="text-center copyright">
                  <p className="text-grey">
                    © {year} Rakesh Chouhan. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

let newDate = new Date();
let year = newDate.getFullYear();

export default Footer;
