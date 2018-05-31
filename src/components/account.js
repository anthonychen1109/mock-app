import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import images from './images';

const main = images.main;

class Account extends Component {
  render() {
    return (
      <div className="main container">
        <div className="main-page-signup">
          <Link
            to='/'
            className="btn btn-primary"
            >
            Back
          </Link>
        </div>
        <div className="account-logo-img container">
          <img src={main} />
        </div>
        <div className="res-info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently   with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="acc-btns">
          <div>
            <Link to='/signup' className="btn btn-primary">Sign Up</Link>
          </div>
          <div>
            <Link to='/signin' className="btn btn-primary">Sign In</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Account;
