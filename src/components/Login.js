import React from 'react';

import { AuthContext } from '../App';

const Login = () => (
  <AuthContext.Consumer>
    {({ toggleAuth, isAuth }) => (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    )}
  </AuthContext.Consumer>
);

export default Login;
