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