import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Home from './components/home';
import Profile from './components/profile';
import Contacts from './components/contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <NavLink style={{marginRight: '20px'}} to="/profile">Profile Page</NavLink>
            <NavLink to="/contacts">Contacts Page</NavLink>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/contacts" component={Contacts} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
