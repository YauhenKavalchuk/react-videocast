import React, { Component } from 'react';

import Login from './components/Login';
import Profile from './components/Profile';

export const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {},
});

class App extends Component {
  state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth
    }));
  };

  render() {
    const { isAuth } = this.state;

    return (
      <AuthContext.Provider value={{ isAuth, toggleAuth: this.toggleAuth }}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
