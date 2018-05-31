import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agree: false
    }
    this.handleAgree = this.handleAgree.bind(this);
  }

  handleAgree() {
    this.setState({ agree: !this.state.agree })
  }

  render() {
    return (
      <div className="container">
        <Link to='/account' className="btn btn-primary">
          Back
        </Link>
        <div className=" sign-up container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
            <br />
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password"/>
          </div>
          <div className="text-center terms-services">
            <input type='checkbox' onClick={this.handleAgree}/>
            <p>I agree to the terms and services, etc..</p>
          </div>
          <br />
          <div className="signup-signin">
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <Link to='/signin'>I have an account already.</Link>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

export default Signup;
