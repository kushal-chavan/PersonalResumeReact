import React, { Component } from "react";
import WorkExperience from './WorkExperience.json';
import Experience from './ExperienceItems'

export class Resume extends Component {
  state = {
    experience: WorkExperience,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section" id="resume">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">My Resume</h2>
                  <p className="section-subtitle">
                    If you call failures experiments, you can put them in your
                    resume and claim them as achievements.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="row education">
                <div className="col-md-10 col-md-offset-1">
                  <h3>
                    My Education
                    <br />
                    1989 - 2009
                  </h3>
                  <p className="text-center">
                    Thanks to my parents for helping and supporting me for what
                    I am today.
                  </p>
                  <div className="panel-group resume" id="education">
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2008 - 2009</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#education1"
                          data-parent="#education"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Masters in Electrical and Electronics Engineering.
                            </h4>
                            <br />
                            <h6 className="college-title">
                              - Wayne State University
                            </h6>
                          </div>
                        </div>
                        <div className="collapse panel-collapse in" id="education1">
                          <div className="text-grey panel-body">
                            <p>
                              Graduated with distinction majoring VLSI Systems
                              design with specific interest in Embedded Systems
                              and Sensor Cells.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2003 - 2007</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#education2"
                          data-parent="#education"
                          data-toggle="collapse"
                          className="collapsed"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Bachelors in Electronics and Communications
                              Engineering.
                            </h4>
                            <br />
                            <h6 className="college-title">
                              - Jawaharlal Nehru Technology University
                            </h6>
                          </div>
                        </div>
                        <div className="collapse panel-collapse" id="education2">
                          <div className="text-grey panel-body">
                            <p>
                              Graduated with distinction with extensive interest
                              in Embedded Systems, VLSI, Telecommunication,
                              Electro Magnetic Theory and Networking theory but
                              not limited to Computer Science subjects like
                              Pulse & Digital Circuits, Operating Systems and
                              Computer Networks.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2001 - 2003</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#education3"
                          data-parent="#education"
                          data-toggle="collapse"
                          className="collapsed"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Board of Intermediate Education.
                            </h4>
                            <br />
                            <h6 className="college-title">
                              - Sri Aurobindo Jr. College
                            </h6>
                          </div>
                        </div>
                        <div className="collapse panel-collapse" id="education3">
                          <div className="text-grey panel-body">
                            <p>
                              Excelled Intermediate Education (Class of 11 & 12)
                              with top of the className marks mainly in Maths,
                              Physics and Chemistry subjects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">1989 - 2001</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#education4"
                          data-parent="#education"
                          data-toggle="collapse"
                          className="collapsed"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Board of Secondary School.
                            </h4>
                            <br />
                            <h6 className="college-title">
                              - St. Ann's High School
                            </h6>
                          </div>
                        </div>
                        <div className="collapse panel-collapse" id="education4">
                          <div className="text-grey panel-body">
                            <p>
                              It's really hard to get back to those initial days
                              of incubating maturedness which was filled with
                              joy and learning things every day in a new
                              fashion. I always feel that I was very well
                              nourished with the qualities I carry myself to
                              this day. I was a simple, sober and a very bright
                              student who would complete his homeworks on time,
                              taking examinations very seriously and had
                              ambition towards any goals which were set forth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Work Experience */}
              <div className="row work-experience">
                <div className="col-md-10 col-md-offset-1">
                  <h3>
                    Work Experience
                    <br />
                    2008 - Till Present
                  </h3>
                  <div className="panel-group resume" id="work">
                    <Experience experience={this.state.experience} />
                  </div>
                </div>
              </div>
               {/* Work Experience End*/}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Resume;
