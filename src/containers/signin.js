import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
      <div className="container">
        <Link to='/account' className="btn btn-primary">
          Back
        </Link>
        <div className=" sign-up container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Signin;
