import React from "react";
import { Link } from "react-router-dom";

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />
            &nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <img
              src={props.currentUser.image}
              className="user-pic"
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="https://www.arkivit.se/wp-content/uploads/2017/03/ait-logo01.png"
              height="100"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
