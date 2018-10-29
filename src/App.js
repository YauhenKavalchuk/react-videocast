import React, { Fragment, Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Home from './components/home';
import Contacts from './components/contacts';

const Profile = React.lazy(() => import('./components/profile'));

class App extends Component {
  state = {
    showProfile: false
  };

  showProfileToggle = () => {
    this.setState(({ showProfile }) => ({
      showProfile: !showProfile,
    }));
  };

  render() {
    const { showProfile } = this.state;

    return (
      <Fragment>
        <button onClick={this.showProfileToggle}>Toggle Profile</button>
        {showProfile ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        ) : (
          <Contacts />
        )}
      </Fragment>
      // <BrowserRouter>
      //   <Fragment>
      //     <nav>
      //       <NavLink style={{marginRight: '20px'}} to="/profile">Profile Page</NavLink>
      //       <NavLink to="/contacts">Contacts Page</NavLink>
      //     </nav>
      //     <Route path="/" exact component={Home} />
      //     <Route
      //       path="/profile"
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Profile />
      //         </Suspense>
      //       )}
      //     />
      //     <Route path="/contacts" component={Contacts} />
      //   </Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
