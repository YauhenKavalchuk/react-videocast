import React from 'react';

import { AuthContext } from '../App';

const Profile = () => (
  <AuthContext.Consumer>
    {({ isAuth }) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

export default Profile;
