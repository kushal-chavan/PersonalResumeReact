import React, { Component } from "react";
import SkillsItems from "./SkillItems";
import KnowledgeItems from "./KnowledgeItems";
import Skill from "./skills.json";
import Knowledge from "./Knowledge.json";

export class Skills extends Component {
  state = {
    skills: Skill,
    knowledge: Knowledge,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section" id="skills">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">Skills & Expertise</h2>
                  <p className="section-subtitle">
                    A winner is someone who recognizes his God-given talents,
                    works his tail off to develop them into skills, and uses
                    these skills to accomplish his goals.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="circle-chart">
                <div className="row">
                  <SkillsItems skills={this.state.skills} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="knowledge">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">Knowledge</h2>
                  <p className="section-subtitle">
                    Knowledge comes from learning. Wisdom comes from living and
                    Wisdom begins with Wonder.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>

              <div className="row">
                <KnowledgeItems knowledge={this.state.knowledge} />
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="accolades">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">Accolades</h2>
                  <p className="section-subtitle">
                    The accolades, just like the scrapes and bruises, fade in
                    the end, and all you're left with is your ambition.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="accolades">
                    <div className="item">
                      <i className="icon-Idea-2"></i>
                      <div className="content">
                        <h3>Erlang Language - 2010</h3>
                        <p className="text-grey">
                          A course completion certificate from Erlang Solutions
                          on Erlang Language.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <i className="icon-Twitter"></i>
                      <div className="content">
                        <h3>Six Sigma (Green Belt) - 2008</h3>
                        <p className="text-grey">
                          Received Green Belt in Six Sigma as part of my Masters
                          Course.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <i className="icon-Brush"></i>
                      <div className="content">
                        <h3>
                          Post Graduation Diploma in Computer Applications
                          (PGDCA) - 2001
                        </h3>
                        <p className="text-grey">
                          Congratulated with distinction in MS-DOS, C language
                          and MS Office 98 by National Computing Council, India.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <i className="icon-Funky"></i>
                      <div className="content">
                        <h3>Locknil Computer Education - 1997</h3>
                        <p className="text-grey">
                          Certificate in Basic Computer Language (Elementary)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-grey bookmark text-center">
                    <i className="icon-Bookmark"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-image-yes" id="milestones">
          <div className="section-wrapper container-fluid">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">Milestones Achieved</h2>
                  <p className="section-subtitle">
                    My path has not been determined. I shall have more
                    experiences and pass many more milestones.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="milestones">
                <div className="row">
                  <div className="item col-md-3 col-sm-6">
                    <div className="circle">
                      <i className="icon-Coffee"></i>
                    </div>
                    <span
                      className="number"
                      data-from="10"
                      data-refresh-interval="100"
                      data-to="5012"
                    >
                      10
                    </span>
                    <h4>Cups of Coffee</h4>
                  </div>
                  <div className="item col-md-3 col-sm-6">
                    <div className="circle">
                      <i className="icon-Clock"></i>
                    </div>
                    <span
                      className="number"
                      data-from="10"
                      data-refresh-interval="100"
                      data-to="19432"
                    >
                      10
                    </span>
                    <h4>Hours Worked</h4>
                  </div>
                  <div className="item col-md-3 col-sm-6">
                    <div className="circle">
                      <i className="icon-Coding"></i>
                    </div>
                    <span
                      className="number"
                      data-from="10"
                      data-refresh-interval="10"
                      data-to="14"
                    >
                      10
                    </span>
                    <h4>Succesful Projects</h4>
                  </div>
                  <div className="item col-md-3 col-sm-6">
                    <div className="circle">
                      <i className="icon-Smile"></i>
                    </div>
                    <span
                      className="number"
                      data-from="10"
                      data-refresh-interval="10"
                      data-to="11"
                    >
                      5
                    </span>
                    <h4>Happy Clients</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="work-process">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-12">
                  <h2 className="section-title">Work Process</h2>
                  <p className="section-subtitle">
                    I put my heart and my soul into my work, and have lost my
                    mind in the process - Vincent Van Gogh
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-grey text-justify">
                    With over 8 years of extensive experience and expertise
                    across different domains with a variety of clients, I have
                    the competence to understand the clients business needs and
                    provide the client with cutting-edge software and mobile
                    applications.
                  </p>
                </div>
              </div>
              <div className="work-process">
                <div className="row">
                  <div className="item col-md-2 col-sm-2 no-margin first">
                    <div className="inner-content">
                      <i className="icon-Files"></i>{" "}
                      <span className="title">1. Requirements</span>{" "}
                      <span className="dot"></span>
                    </div>
                    <i className="icon-Arrow icon-Down-3"></i>
                  </div>
                  <div className="item col-md-2 col-sm-2">
                    <div className="inner-content">
                      <i className="icon-Pencil"></i>{" "}
                      <span className="title">2. Design</span>
                    </div>
                    <i className="icon-Arrow icon-Up-3"></i>
                  </div>
                  <div className="item col-md-2 col-sm-2 no-margin">
                    <div className="inner-content">
                      <i className="icon-Coding"></i>{" "}
                      <span className="title">3. Implement</span>
                    </div>
                    <i className="icon-Arrow icon-Down-3"></i>
                  </div>
                  <div className="item col-md-2 col-sm-2">
                    <div className="inner-content">
                      <i className="icon-Bug"></i>{" "}
                      <span className="title">4. Test</span>
                    </div>
                    <i className="icon-Arrow icon-Up-3"></i>
                  </div>
                  <div className="item col-md-2 col-sm-2 no-margin">
                    <div className="inner-content">
                      <i className="icon-Rocket"></i>{" "}
                      <span className="title">5. Deliver</span>
                    </div>
                    <i className="icon-Arrow icon-Down-3"></i>
                  </div>
                  <div className="item col-md-2 col-sm-2 last">
                    <div className="inner-content">
                      <i className="icon-Monitor-2"></i>{" "}
                      <span className="title">6. Support</span>{" "}
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-grey text-justify">
                    I intend to reduce the risks and time associated with the
                    application development and so I follow industry standard
                    SDLC (Software Developement Life Cycle) process. I generally
                    follow spiral iterative methodology to build software
                    applications in the shortest possible time and with zero
                    risk. I start the project by gathering business and
                    technical requirements, designing, development, integration
                    & testing, deployment & acceptance and finally maintaining
                    the product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Skills;
