import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="profile">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-7 match-height">
                  <div className="padding-right-yes profile-text">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="section-title">
                          Hello, My Name is Chouhan.
                        </h2>
                        <p>
                          Rakesh Chouhan, 33 years old, born and grew up in
                          Hyderabad, India. Currently working in Charlotte, NC.
                          Highly motivated, a solution driven developer.
                        </p>
                        <span className="divider"></span>
                        <p className="text-grey">
                          I currently work for N2 Services Inc., as a consultant
                          for different clients and projects where I spend most
                          of my time developing and working on awesome projects.
                        </p>
                        <p className="text-grey">
                          I am a team player, a self-motivator possessing
                          excellent analytical, communication, problem solving,
                          decision-making and organizational skills. I love to
                          be in a challenging position in the diverse field of
                          design, development and verification software and as
                          well as hardware technologies. I am passionate and
                          enthusiastic in learning and adopting new
                          technologies.
                        </p>
                        <p className="text-grey">
                          My ultimate objective is to make myself stand in
                          parallel with the latest research and developments,
                          and at the same time benefiting the company for which
                          I work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-details padding-right-yes">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <h4>Contact Details</h4>
                        <ul className="text-grey list-unstyled">
                          <li>Rakesh Chouhan</li>
                          <li>Charlotte, NC</li>
                          <li>+1(337)-853-1497</li>
                          <li>me@rakeshchouhan.com</li>
                          <li>www.rakeshchouhan.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden-xs col-md-5 hidden-sm match-height pp-wrapper">
                  <div className="profile-picture style-one top-profile">
                    <h2 className="iAmTitle">I AM...</h2>
                    <br />
                    <div className="iAmAmazing">
                      original generous kind clever brave determined thoughtful
                      spontaneous lovable optimistic ambitious caring courageous
                      extraordinary grateful witty successful energetic hopeful
                      dynamic compassionate happy unique inspiring creative
                      daring passionate imaginative fabulous confident
                      intelligent friendly funny independent strong loving
                      insightful positive considerate gracious beautiful
                      adventurous joyful loyal incredible precious brilliant
                      honest genuine talented wonderful fearless amazing
                    </div>
                    <br />
                    <h2 className="iAmTitle">ME</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Profile;
