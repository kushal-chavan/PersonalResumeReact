import React, { Component } from "react";
import SkillsItems from "./SkillItems";
import KnowledgeItems from "./KnowledgeItems";
import AccoladeItems from "./AccoladeItems";
import MilestoneItems from "./MilestoneItems";
import Skill from "./skills.json";
import Knowledge from "./Knowledge.json";
import Accolades from "./Accolades.json";
import Milestones from "./Milestones.json";
import './Skills.css';

export class Skills extends Component {
  state = {
    skills: Skill,
    knowledge: Knowledge,
    accolades: Accolades,
    milestones: Milestones,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section" id="skills">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-8 col-md-offset-2">
                  <h2 className="section-title">{this.props.title.title}</h2>
                  <p className="section-subtitle">
                  {this.props.title.tagline}
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
                  <h2 className="section-title">{this.props.title.knowledge.title}</h2>
                  <p className="section-subtitle">
                  {this.props.title.knowledge.tagline}
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
                  <h2 className="section-title">{this.props.title.accolades.title}</h2>
                  <p className="section-subtitle">
                  {this.props.title.accolades.tagline}
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="accolades">
                    <AccoladeItems accolades={this.state.accolades} />
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
                  <h2 className="section-title"> {this.props.title.milestones.title}</h2>
                  <p className="section-subtitle">
                  {this.props.title.milestones.tagline}
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="milestones">
                <div className="row">
                  <MilestoneItems milestones={this.state.milestones} />
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
