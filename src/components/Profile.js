import React from 'react';

const Profile = ({ isAuth }) => (
  <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
);

export default Profile;
