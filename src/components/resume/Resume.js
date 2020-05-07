import React, { Component } from "react";
import WorkExperience from "./WorkExperience.json";
import Education from "./Education.json";
import Experience from "./ExperienceItems";
import EducationItems from "./EducationItems";

export class Resume extends Component {
  state = {
    experience: WorkExperience,
    educations: Education,
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
                    <EducationItems educations={this.state.educations}/>
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
