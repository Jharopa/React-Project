import React from 'react';
import '../App.css';
import Media from 'react-bootstrap/Media';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="App">
        <h1 className="mx-auto m-5">Welcome to The Guitar Database!</h1>
        <Media className="mx-auto" style={{ width: '50rem' }}>
          <Media.Body>
            <h2 className="m-3">What is The Guitar Database?</h2>
            <p className="mx-auto text-left">
              The Guitar Database is a web based application with which you can catalog, view and compare guitars.
              You can do this using the View Guitars, Add Guitars and Compare Guitar pages accessed through the navigation bar above.
            </p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default LandingPage;