import React, { Component } from "react";

export class Resume extends Component {
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
              <div className="row work-experience">
                <div className="col-md-10 col-md-offset-1">
                  <h3>
                    Work Experience
                    <br />
                    2008 - Till Present
                  </h3>
                  <div className="panel-group resume" id="work">
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2016 - NOW</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work1"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Compass Group USA - Sr. Software Engineer.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2015 - 2016</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work1"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Goldman Sachs. - Sr. Principal IT Consultant.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2014 - 2015</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work2"
                          data-parent="#work "
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              VMware Inc. - Sr. Principle Software Engineer.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2012 - 2013</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work4"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Morgan Stanley. - Sr. Software Engineer Consultant
                              - Remote.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2011 - 2014</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work5"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Deloitte LLC. - Sr. IT Consultant.
                            </h4>
                            <br />
                            <span>
                              - Department of Children and Family Services
                              (DCFS) Louisana.
                            </span>
                            <br />
                            <span>
                              - Department of Health and Social Services (DHSS)
                              Delaware.
                            </span>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2010 - 2011</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work6"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Chrysler (FCA). - IT Consultant
                            </h4>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2008 - 2009</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work7"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              Verizon Telecom. - Software Engineer Consultant
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resume-item">
                      <div className="resume-year">
                        <span className="resume-year">2008 - 2008</span>
                      </div>
                      <div className="resume-btn">
                        <a
                          href="#work8"
                          data-parent="#work"
                          data-toggle="collapse"
                        >{null}</a>
                      </div>
                      <div className="panel">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <h4 className="resume-title">
                              N2 Services Inc. - Programmer Analyst - Intern
                            </h4>
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

export default Resume;
