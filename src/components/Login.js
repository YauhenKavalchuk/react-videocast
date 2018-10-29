import React, { Fragment } from 'react';

const Login = ({ onLogIn, onLogOut, isAuth }) => {
  console.log(isAuth);
  return (
    <Fragment>
      <button onClick={onLogIn}>LogIn</button>
      <button onClick={onLogOut}>LogOut</button>
    </Fragment>
  );
}

export default React.memo(Login);
