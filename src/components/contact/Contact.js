import React, { Component } from "react";
import './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';

export class Contact extends Component {
  
  state = {
    contactForm: 'none',
    hide: '',
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="contact">
          <div className="section-wrapper container">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-12">
                  <h1 className="section-title">Say Hello</h1>
                  <p className="section-subtitle">
                    Have exciting work !!! Let's discuss.
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <ScrollAnimation offset={10} animateIn='flipInX' animateOnce={true}>
              <div style={{display:this.state.hide}} className="row" onClick={() => {this.setState({contactForm:'unset', hide:'none'})}}>
                <div className="col-md-12">
                  <div className="text-center contact-details">
                    <div className="speech-bubble">
                      <input
                        alt=""
                        className="img-responsive sayHello"
                        id="saveForm"
                        name="saveForm"
                        type="image"
                        src="assets/icons/sendEmail.png"
                      />
                    </div>
                    <h2>
                      Rakesh <strong>Chouhan</strong>
                    </h2>
                    <h4 className="text-grey">me@rakeshchouhan.com</h4>
                    <span className="divider center"></span>
                  </div>
                </div>
              </div>
              </ScrollAnimation>
              <div className="row" id="contactFormRow">
                <div className="col-md-8 col-md-offset-2">
                  <form
                    style={{display:this.state.contactForm}}
                    action="https://rakeshchouhan.com/services/contact/sendEmail.php"
                    className="contact-form element-line validate"
                    id="contact-form"
                    method="POST"
                    name="contact-form"
                    noValidate
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <input
                              className="form-control required"
                              id="name"
                              name="name"
                              aria-required="true"
                              autoComplete="off"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <input
                              className="form-control required email"
                              id="email"
                              name="email"
                              aria-required="true"
                              autoComplete="off"
                              placeholder="Email"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <input
                              className="form-control required"
                              id="subject"
                              name="subject"
                              aria-required="true"
                              autoComplete="off"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <textarea
                              aria-invalid="false"
                              aria-required="true"
                              className="form-control required valid"
                              id="message"
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button type="submit" id="submit">
                            Say Hello
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
