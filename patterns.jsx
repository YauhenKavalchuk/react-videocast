/* 1. Function component */

// Wrong
class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.name}!</h1>
        <h2>I work as a {this.props.position}</h2>
      </div>
    );
  }
};

// Correct
const Greeting = (props) => (
  <div>
    <h1>Hi {props.name}!</h1>
    <h2>I work as a {props.position}</h2>
  </div>
);

/* 2. Destructuring props */

// Wrong
const Greeting = (props) => (
  <div>
    <h1>Hi {props.name}!</h1>
  	<h2>I work as a {props.position}</h2>
  </div>
);

// Correct
const Greeting = ({ name, position }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </div>
);

// Default values for props
class Greeting extends React.Component {
  render() {
    const { name = '', position = '' } = this.props;

    return (
      <div>
        <h1>Hi {name}!</h1>
        <h2>I work as a {position}</h2>
      </div>
    );
  }
};

/* 3. JSX spread attributes */

// Example of component props
<Greeting
  name="Jack"
  position="Front-end Developer"
  data-name="position"
  onClick={showFunction}
  id="person-position"
/>

// REST
const Greeting = ({ name, position, ...restProps }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2 {...restProps}>I work as a {position}</h2>
  </div>
);

/* 4. Merge destructured props with other values */

// Example of custom props
<Greeting
  name="Jack"
  position="Front-end Developer"
  className="new-class"
/>

const Greeting = ({ name, position, ...restProps }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2 className="old-class" {...restProps}>I work as a {position}</h2>
  </div>
);

/* 5. Conditional rendering */

// Render if 'true'
const Greeting = ({ name, position }) => (
  <div>
    {name && <h1>Hi {name}!</h1>}
    <h2>I work as a {position}</h2>
  </div>
);

// Render if 'false'
const Greeting = ({ name }) => (
  <div>
    <h1>Hi {name}!</h1>
    {position || <h2>I work as a Developer</h2>}
  </div>
);

// Ternary operator
const Greeting = ({ name, position }) => (
  <div>
    {name ? <h1>Hi {name}!</h1> : <span>No name</span>}
    <h2>I work as a {position}</h2>
  </div>
);

/* 6. Component as Props */

<LayoutComponent
  top={<Navigation />}
  leftSide={<SideBar />}
  rightSide={<Main />}
  bottom={<Footer />}
/>

/* 7. Modern Class syntax */

// Old version
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {};
};

// Modern
class Counter extends React.Component {
  state = {
    counter: 0,
  }

  handleClick = () => {};
};

/* 8. Array as children */

// Wrong
const List = () => (
  <ul>
    <li>first</li>
    <li>second</li>
  </ul>
);

// Correct
const List = () => (
  <ul>
    {["first", "second"].map(item => <li key={item}>{item}</li>)}
  </ul>
);

/* 9. Fragment */

// Possible
const Greeting = ({ name, position }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </div>
);

// Use Fragment
import { Fragment } from 'react';

const Greeting = ({ name, position }) => (
  <Fragment>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </Fragment>
);

// Much better
const Greeting = ({ name, position }) => (
  <>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </>
);

/* 10. Return Array */

const Layout = ({ children }) => [
  <Navigation key="navigation" />,
  <Main key="main">{children}</Main>,
  <Footer key="footer" />,
];

/* 11. propTypes & defaultProps */

const Greeting = ({ name, age, onClick, address }) => (
  <>
    <h1 onClick={onClick}>My name is {name}! I am {age} old.</h1>
    {address && <h2>My address is {address.city}, {address.street}}</h2>
  </>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }),
};

Greeting.defaultProps = {
  onClick: () => {},
  address: null,
};

/* 12. setState and 2nd argument */

handleChange = () => {
  this.setState({ someValue: this.state.someValue + 1 },
    () => { this.callbackFunc(this.state.someValue)
  });
};

/* 13. Proxy component */

// Not good
<button type="button"></button>

// Instead create component
const Button = (props) => <button type="button" {...props} />

// And use component everywhere
<Button />

/* 14. Event switch */

// A lot of methods
handleClick() => { this.doSomething() };
handleMouseEnter() { this.setState({ hovered: true }) };
handleMouseLeave() { this.setState({ hovered: false }) };

// One Event switch
handleEvent({ type }) {
  switch(type) {
    case "click": return this.doSomething();
    case "mouseenter": return this.setState({ hovered: true });
    case "mouseenter": return this.setState({ hovered: false });
    default: return console.warn(`No case for event type ${type}`);
  }
};

/* 15. Higher-order component */

const Connect = ComposedComponent => (
  class extends React.Component {
    this.state = { data: null }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ data });
    }

    render() {
      return (
        <ComposedComponent {...this.props} data={this.state.data} />
      )
    }
  }
);
