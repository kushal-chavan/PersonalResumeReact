import React, { Component } from "react";
// import myProfile from "./Profile.json";
import "./Profile.css";
import axios from "axios";
import shortid from "shortid";

export class Profile extends Component {
  state = {
    profile: [],
  };
  componentDidMount() {
    axios.get(`https://rakeshchouhan.herokuapp.com/api/profile`).then((res) => {
      this.setState({ profile:res.data });
    });
  }
  getRandomKey = () => {
    return shortid.generate();
  }

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
                          {this.props.title.title}
                        </h2>
                        <p>{this.props.title.tagline}</p>
                        <span className="divider"></span>
                          <p
                            key={this.getRandomKey}
                            className="text-grey"
                            dangerouslySetInnerHTML={{ __html: this.state.profile.map(data => data.body)}}
                          ></p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-details padding-right-yes">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <h4>Contact Details</h4>
                        {this.state.profile.map((s) => (
                          <ul
                            key={s.id}
                            className="text-grey list-unstyled"
                            dangerouslySetInnerHTML={{ __html: s.contact }}
                          ></ul>
                        ))}
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
