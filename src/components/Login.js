import React, { Component } from 'react';

import AuthContext from '../auth-context';

class Login extends Component {

  static contextType = AuthContext;

  render() {

    const { toggleAuth, isAuth } = this.context;

    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    );
  }
}

export default Login;
