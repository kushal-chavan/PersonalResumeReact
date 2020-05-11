import React, { Component } from "react";
import QualityItems from "./QualityItems";
import Data from "./qualities.json";
import './Qualities.css';

export class Qualities extends Component {
  state = {
    quality: Data,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section" id="qualities">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">Qualities I carry...</h2>
                  <p className="section-subtitle">
                    I love what I do. I take great pride in what I do. And I
                    can't do something halfway, three-quarters, nine-tenths. If
                    I'm going to do something, I go all the way.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              {/* Start Qualities */}
              <div className="qualities">
                <div className="row">
                  <QualityItems quality={this.state.quality} />
                </div>
              </div>
               {/* Qualities End */}
            </div>
          </div>
        </section>
        <section className="section bg-image-yes" id="strengths">
          <div className="container-fluid">
            <div className="row">
              <div className="item col-md-6">
                <div className="section-wrapper container-fluid">
                  <div className="section-content">
                    <div className="row">
                      <div className="text-center col-md-8 col-md-offset-2 myStrengthsTitle">
                        <h2 className="section-title">My Strengths</h2>
                        <p className="section-subtitle">
                          Failure will never overtake me if my determination to
                          succeed is strong enough.
                        </p>
                        <span className="divider center"></span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 myStrengthsContent">
                        <div className="column-chart">
                          <div className="hidden-xs legend legend-left">
                            <h3 className="legend-title">ME</h3>
                          </div>
                          <div className="hidden-xs legend legend-right">
                            <div className="item">
                              <h4>Superhero</h4>
                            </div>
                            <div className="item">
                              <h4>Preety Good</h4>
                            </div>
                            <div className="item">
                              <h4>Good</h4>
                            </div>
                            <div className="item">
                              <h4>Newbie</h4>
                            </div>
                          </div>
                          <div className="chart clearfix">
                            <div className="item">
                              <div className="bar">
                                <span className="percent">82%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 294 }}
                                  data-percent="82"
                                >
                                  <span className="title">Innovation</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">71%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 227 }}
                                  data-percent="71"
                                >
                                  <span className="title">Reliable</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">82%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 262 }}
                                  data-percent="82"
                                >
                                  <span className="title">Communication</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">58%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 185 }}
                                  data-percent="58"
                                >
                                  <span className="title">Leadership</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">67%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 214 }}
                                  data-percent="67"
                                >
                                  <span className="title">Persuasion</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-md-6">
                <div className="section-wrapper container-fluid">
                  <div className="section-content">
                    <div className="row">
                      <div className="text-center col-md-8 col-md-offset-2 myStrengthsTitle">
                        <h2 className="section-title">My Stages of Grief</h2>
                        <p className="section-subtitle">
                          Failure will never overtake me if my determination to
                          succeed is strong enough.
                        </p>
                        <span className="divider center"></span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 myStrengthsContent">
                        <div className="column-chart">
                          <div className="hidden-xs legend legend-left">
                            <h3 className="legend-title">ME</h3>
                          </div>
                          <div className="hidden-xs legend legend-right">
                            <div className="item">
                              <h4>Extreme</h4>
                            </div>
                            <div className="item">
                              <h4>Less Extreme</h4>
                            </div>
                            <div className="item">
                              <h4>Average</h4>
                            </div>
                            <div className="item">
                              <h4>Newbie</h4>
                            </div>
                          </div>
                          <div className="chart clearfix">
                            <div className="item">
                              <div className="bar">
                                <span className="percent">50%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 294.4 }}
                                  data-percent="50"
                                >
                                  <span className="title">Denial</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">35%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 227.4 }}
                                  data-percent="35"
                                >
                                  <span className="title">Anger</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">60%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 262.4 }}
                                  data-percent="60"
                                >
                                  <span className="title">Bargaining</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">55%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 185.6 }}
                                  data-percent="55"
                                >
                                  <span className="title">Depression</span>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="bar">
                                <span className="percent">80%</span>
                                <div
                                  className="item-progress"
                                  style={{ Height: 214.4 }}
                                  data-percent="80"
                                >
                                  <span className="title">Acceptance</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Qualities;
