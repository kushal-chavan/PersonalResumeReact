import React, { Component } from "react";
import SkillsItems from "./SkillItems";
import KnowledgeItems from "./KnowledgeItems";
import AccoladeItems from "./AccoladeItems";
// import MilestoneItems from "./MilestoneItems";
import './Skills.css';
import axios from 'axios';
import ScrollAnimation from 'react-animate-on-scroll';

export class Skills extends Component {
  state = {
    skills1: [],
    skills2: [],
    skills3: [],
    knowledge: [],
    accolades: [],
    cupOfCoffee: 0,
    workedHours: 0, 
    projects: 0,
    clients: 0,
    experience: 0,
  };

  milestones(){
    let consideredDate = "2009-01-01";
    let cupOfCoffeeADay = 1;
    let workingHoursPerDay = 8;
    let projectsPerClient = 2;

    let startDate = Date.parse(consideredDate);
    let endDate = new Date();
    let timeDiff = endDate - startDate;
    let daysDiff =  Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    // cals
    let currentExprience = Math.floor(daysDiff / 365);
    let totalCoffees = cupOfCoffeeADay * daysDiff;
    let clients = 11;
    let totalProjects = (clients * projectsPerClient) + 3;
    let work = workingHoursPerDay * daysDiff;

    this.setState({ 
      experience: currentExprience,
      cupOfCoffee: totalCoffees,
      workedHours: work,
      projects: totalProjects,
      clients: clients
    });
  }

  callAPIs(){
    axios.get(`https://rakeshchouhan.herokuapp.com/api/knowledge`).then((res) => {
      this.setState({ knowledge:res.data });
    });
    axios.get(`https://rakeshchouhan.herokuapp.com/api/accolades`).then((res) => {
      this.setState({ accolades:res.data });
    });
    axios.get(`https://rakeshchouhan.herokuapp.com/api/skills`).then((res) => {
      this.setState({ skills1:res.data.slice(0, 6) });
      this.setState({ skills2:res.data.slice(6, 12) });
      this.setState({ skills3:res.data.slice(12, 18) });
    });
  }
  componentDidMount() {
    this.callAPIs();
    this.milestones();
  }

  render() {
    return (
      <React.Fragment>
        <section id="skills">
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
                  <SkillsItems skills={this.state.skills1} />
                </div>
                <div className="row">
                  <SkillsItems skills={this.state.skills2} />
                </div>
                <div className="row">
                  <SkillsItems skills={this.state.skills3} />
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
                  <div className="item col-md-3 col-sm-6">
                      <div className="circle"><i className="icon-Coffee"></i></div>
                      <span className="number">{this.state.cupOfCoffee}</span>
                      <h4>Cups of Coffee</h4>
                  </div>
                  <div className="item col-md-3 col-sm-6">
                      <div className="circle"><i className="icon-Clock"></i></div>
                      <span className="number">{this.state.workedHours}</span>
                      <h4>Hours Worked</h4>
                  </div>
                  <div className="item col-md-3 col-sm-6">
                      <div className="circle"><i className="icon-Coding"></i></div>
                      <span className="number">{this.state.projects}</span>
                      <h4>Succesful Projects</h4>
                  </div>
                  <div className="item col-md-3 col-sm-6">
                      <div className="circle"><i className="icon-Smile"></i></div>
                      <span className="number">{this.state.clients}</span>
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
                    With over {this.state.experience} years of extensive experience and expertise
                    across different domains with a variety of clients, I have
                    the competence to understand the clients business needs and
                    provide the client with cutting-edge software and mobile
                    applications.
                  </p>
                </div>
              </div>
              <div className="work-process">
                <div className="row">
                <ScrollAnimation offset={10} className="item col-md-2 col-sm-2 no-margin first" animateIn='bounceInUp' animateOnce={true}>
                    <div className="inner-content">
                      <i className="icon-Files"></i>{" "}
                      <span className="title">1. Requirements</span>{" "}
                      <span className="dot"></span>
                    </div>
                    <i className="icon-Arrow icon-Down-3"></i>
                  </ScrollAnimation>
                  <ScrollAnimation offset={10} className="item col-md-2 col-sm-2" animateIn='bounceInDown' animateOnce={true}>
                    <div className="inner-content">
                      <i className="icon-Pencil"></i>{" "}
                      <span className="title">2. Design</span>
                    </div>
                    <i className="icon-Arrow icon-Up-3"></i>
                  </ScrollAnimation>
                  <ScrollAnimation offset={10} className="item col-md-2 col-sm-2 no-margin" animateIn='bounceInUp' animateOnce={true}>
                    <div className="inner-content">
                      <i className="icon-Coding"></i>{" "}
                      <span className="title">3. Implement</span>
                    </div>
                    <i className="icon-Arrow icon-Down-3"></i>
                  </ScrollAnimation>
                  <ScrollAnimation offset={10} className="item col-md-2 col-sm-2" animateIn='bounceInDown' animateOnce={true}>
                    <div className="inner-content">
                      <i className="icon-Bug"></i>{" "}
                      <span className="title">4. Test</span>
                    </div>
                    <i className="icon-Arrow icon-Up-3"></i>
                  </ScrollAnimation>
                  <ScrollAnimation offset={10} className="item col-md-2 col-sm-2 no-margin" animateIn='bounceInUp' animateOnce={true}>
                    <div className="inner-content">
                      <i className="icon-Rocket"></i>{" "}
                      <span className="title">5. Deliver</span>
                    </div>
                    <i className="icon-Arrow icon-Down-3"></i>
                  </ScrollAnimation>
                  <ScrollAnimation offset={10} className="item col-md-2 col-sm-2 last" animateIn='bounceInDown' animateOnce={true}>
                    <div className="inner-content">
                      <i className="icon-Monitor-2"></i>{" "}
                      <span className="title">6. Support</span>{" "}
                      <span className="dot"></span>
                    </div>
                  </ScrollAnimation>
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
        </section>
      </React.Fragment>
    );
  }
}

export default Skills;
