import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll';
import { API_URL, DOB } from '../../constants'
import { getAge } from '../../utils';

export class Profile extends Component {
  state = {
    profile: [],
  };

  componentDidMount() {
    axios.get(`${API_URL}/profile`).then((res) => {
      this.setState({ profile:res.data });
      this.forceUpdate();
    });
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
                      <ScrollAnimation offset={10} animateIn='bounceInUp' animateOnce={true}>
                        <h2 className="section-title">
                          {this.props.title.title}
                        </h2>
                        </ScrollAnimation>
                        <ScrollAnimation offset={10} animateIn='bounceInUp' animateOnce={true}>
                        <p>{this.props.title.tagline.replace('33', getAge(DOB))}</p>
                        <span className="divider"></span>
                          <p
                            key={1}
                            className="text-grey"
                            dangerouslySetInnerHTML={{ __html: this.state.profile.map(data => data.body)}}
                          ></p>
                          </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                  <ScrollAnimation offset={10} animateIn='fadeInRight' animateOnce={true}>
                  <div className="contact-details padding-right-yes">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <h4>Contact Details</h4>
                        {this.state.profile.map((s) => (
                          <ul
                            key={s._id}
                            className="text-grey list-unstyled"
                            dangerouslySetInnerHTML={{ __html: s.contact }}
                          ></ul>
                        ))}
                      </div>
                    </div>
                  </div>
                  </ScrollAnimation>
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
