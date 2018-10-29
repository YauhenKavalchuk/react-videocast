import React, { Component, Fragment } from 'react';

import Login from './components/Login';
import Profile from './components/Profile';

class App extends Component {
  state = {
    isAuth: false,
  };

  onLogOut = () => {
    this.setState({
      isAuth: false,
    });
  }

  onLogIn = () => {
    this.setState({
      isAuth: true,
    });
  }

  render() {
    const { isAuth } = this.state;

    return (
      <Fragment>
        <Login isAuth={isAuth} onLogIn={this.onLogIn} onLogOut={this.onLogOut} />
        <Profile isAuth={isAuth} />
      </Fragment>
    );
  }
}

export default App;
