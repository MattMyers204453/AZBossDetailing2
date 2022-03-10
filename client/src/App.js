import 'bootstrap/dist/css/bootstrap.css';
import logo from './carlogo.PNG';
import './App.css';
import React, { Component } from 'react';
import Form from './Form';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      showPics: false
    };
    this.submitComplete = this.submitComplete.bind(this);
    this.showPics = this.showPics.bind(this);
  }

  submitComplete() {
    this.setState({ submitted: true });
  }

  showPics() {
    this.setState({ showPics: !this.state.showPics });
  }

  render() {
    if (this.state.showPics === true) {
      return (
        <body className="bg">
          <nav className="navbar navbar-dark navbar-custom py-1">
            <span className="navbar-brand-custom">
              <img src={logo} style={{ width: '35%', height: '35%' }} className=" img-responsive" />
            </span>
            <button class="btn btn-outline-success mx-3 btn-lg btn-custom" type="button" onClick={this.showPics}>
              Back
            </button>
          </nav>
          <Gallery />
        </body>
      );
    }

    if (this.state.submitted === false) {
      return (
        <body className="bg">
          <nav className="navbar navbar-dark navbar-custom py-1">
            <span className="navbar-brand-custom">
              <img src={logo} style={{ width: '35%', height: '35%' }} className=" img-responsive" />
            </span>
            <button class="btn btn-outline-success mx-3 btn-lg btn-custom" type="button" onClick={this.showPics}>
              Before/after pictures
            </button>
          </nav>
          <div className="content">
            <Form submitComplete={this.submitComplete} />
          </div>
        </body>
      );
    }

    return (
      <div>
        <body className="bg">
          <nav className="navbar navbar-dark navbar-custom py-1">
            <span className="navbar-brand-custom">
              <img src={logo} style={{ width: '35%', height: '35%' }} className="d-inline-block align-top" />
            </span>
          </nav>
          <div className="center-text">
            <h1 style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Thanks. You will be contacted shortly..
            </h1>
          </div>
        </body>
      </div>
    )

  }
}

export default App;
