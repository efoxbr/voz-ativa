import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { isMobile } from "react-device-detect";

import { logoutUser } from "../../../actions/authActions";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import TwitterLogin from "react-twitter-auth";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";

import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  twitterResponse(e) {
    console.log("loga com twitter");
    //this.props.twitterResponse();
  }

  facebookResponse(response) {
    console.log("loga com facebook");
    console.log(response);
    //this.props.facebookResponse();
  }

  googleResponse(e) {
    console.log("loga com google");
    //this.props.googleResponse();
  }

  onFailure = error => {
    alert(error);
  };

  onSignOut(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { open } = this.state;
    let linkCompartilhamento = "www.vozativa.org/";
    let textoCompartilhamento =
      "Nos diga o que você defende e em oito minutos a gente apresenta candidatos alinhados com você. " +
      linkCompartilhamento;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../../../data/img/logo.png")}
                alt="Voz Ativa"
                width="100px"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainNavbar"
              aria-expanded="false"
              aria-label="Menu"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ml-auto pr-1">
                <li className="nav-item">
                  <Link to="/sobre" className="nav-link">
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/soucandidato" className="nav-link">
                    Sou candidato
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.toggle}
                    className="nav-link"
                  >
                    login
                  </a>
                </li>
              </ul>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-login">
                <ModalHeader toggle={this.toggle}>identifique-se para a vozativa</ModalHeader>
                <ModalBody>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <span className="icon-google1 login-icon" />
                      <GoogleLogin
                        className="login-text nav-link"
                        clientId="XXXXXXXXXX"
                        buttonText="Google"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                      >
                        <a
                          data-show-count="false"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          entre com sua conta google
                        </a>
                      </GoogleLogin>
                    </li>

                    <li className="nav-item">
                      <span className="icon-facebook login-icon" />
                      <FacebookLogin
                        appId="2339282366084079"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse}
                        cssClass="login-text nav-link"
                        textButton="entre com sua conta facebook"
                        tag="button"
                      />
                    </li>

                    <li className="nav-item">
                      <span className="icon-twitter login-icon" />
                      <TwitterLogin
                        className="login-text nav-link"
                        loginUrl="http://localhost:4000/api/v1/auth/twitter"
                        onFailure={this.twitterResponse}
                        onSuccess={this.twitterResponse}
                        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                      >
                        <a
                          data-show-count="false"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          entre com sua conta twitter
                        </a>
                      </TwitterLogin>
                    </li>
                  </ul>
                </ModalBody>
              </Modal>


              {isMobile && (
                <div>
                  <span className="navbar-text navbar-text-strong">
                    compartilhe
                </span>
                  <ul className="navbar-nav navbar-inline">
                    <li className="nav-item">
                      <a
                        href={
                          "https://twitter.com/intent/tweet/?text=" +
                          textoCompartilhamento
                        }
                        data-show-count="false"
                        className="nav-link nav-strong"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-twitter share-icon" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href={
                          "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fvozativa.org%2F&amp;src=sdkpreparse"
                        }
                        data-show-count="false"
                        className="nav-link nav-strong"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-facebook share-icon" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href={"whatsapp://send?text=" + textoCompartilhamento}
                        className="nav-link nav-strong"
                      >
                        <span className="icon-zapzap share-icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
