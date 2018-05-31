import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import images from './images';

const main = images.main;

class Main extends Component {
  render() {
    return (
      <div className="main container">
        <div className="main-page-signup">
          <Link
            to='/account'
            className="btn btn-primary account-btn"
            >
            Sign Up / Sign In
          </Link>
        </div>
        <div className="main-logo-img container">
          <img src={main} />
        </div>
        <div>
          <h1>Deals</h1>
        </div>
        <div>
          <h1>New</h1>
        </div>
        <div>
          <h1>Favorites</h1>
        </div>
      </div>
    )
  }
}

export default Main;
