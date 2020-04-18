import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";

class Nav extends Component {
  handleLogout = () => {
    console.log("handle Logout");
  };
  render() {
    return (
      <Navbar
        className="test"
        alignLinks="right"
        brand={<span className="brand-logo">{this.props.authedUser}</span>}
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavLink to="/" exact activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          New Poll
        </NavLink>
        <NavLink to="/leaderboard" activeClassName="active">
          Leader Board
        </NavLink>
        <NavLink to="/login" onClick={this.handleLogout}>
          Logout
        </NavLink>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Nav);
