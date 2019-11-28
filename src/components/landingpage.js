import React from 'react';
import Media from 'react-bootstrap/Media';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="App">
        <h1 className="mx-auto m-5">Welcome to The Guitar Database!</h1>
        <Media className="mx-auto" style={{ width: '50rem' }}>
          <Media.Body>
            <h3 className="m-3">What is The Guitar Database?</h3>
            <p className="mx-auto text-left">
              The Guitar Database is a web based application with which you can catalog, view and and get details on guitars.
              You can do this using the View Guitars and Add Guitars pages accessed through the navigation bar.
              The details of any guitar can be seen by selecting details under any guitar on the view guitar page.
            </p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default LandingPage;