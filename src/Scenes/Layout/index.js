import React, { Component } from 'react';
import { RouteTransition, presets } from 'react-router-transition';
import {Link} from 'react-router';
import './App.scss';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    console.log(presets)
    return (
        <div>
        <nav>
          <div className="container">
            <div className="nav">
              <div className="nav-left">
                <Link to="/tim" className="nav-item ux" activeClassName="active ux"> TIM </Link>
                <Link to="/johan" className="nav-item developer" activeClassName="active developer"> JOHAN </Link>
                <Link to="/viman" className="nav-item developer" activeClassName="active developer"> TRUONG VI MAN </Link>
              </div>
            </div>
          </div>
        </nav>
        <RouteTransition
          
          pathname={this.props.location.pathname}
          {...presets.fade}
        >
          {this.props.children}
        </RouteTransition>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
	return {
		role: state.role,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		// getData: bindActionCreators(UserActionCreators.fetchUser, dispatch),
		// logout: bindActionCreators(AuthenticationCreators.logout, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);