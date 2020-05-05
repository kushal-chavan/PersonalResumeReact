import React, { Component } from "react";
import Client from "./ClientItems";
import clients from "./clients.json";
import ClientsImage from "./ClientsImage";

export class Clients extends Component {
  state = {
    clients: clients,
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-image-yes" id="clients">
          <div className="section-wrapper container-fluid">
            <div className="section-content">
              <div className="row">
                <div className="text-center col-md-12">
                  <h2 className="section-title">Projects & Clients</h2>
                  <p className="section-subtitle">
                    The best preparation for good work tomorrow is to do good
                    work today. - Elbert Hubbard
                  </p>
                  <span className="divider center"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="clients flexslider">
                    <div className="slides">
                      <Client clients={this.state.clients} />
                      <div className="flexslider-controls">
                        <ul className="flex-control-nav">
                            <ClientsImage clients={this.state.clients} />
                        </ul>
                      </div>
                      <ul className="hidden-xs flex-direction-nav-custom list-inline">
                        <li>
                          <a href="#0" className="flex-prev">
                            <i className="icon-Left-3"></i>
                            {null}
                          </a>
                        </li>
                        <li>
                          <a href="#0" className="flex-next">
                            <i className="icon-Right-3"></i>
                            {null}
                          </a>
                        </li>
                      </ul>
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

export default Clients;
