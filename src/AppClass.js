import React, { Component } from 'react';
import Item from './Item';
import { ThemeContext, PodcastContext } from './app-context';

class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
      count: 0,
      value: 'Test value',
      width: window.innerWidth,
      uder: null,
    };

    this.setCount = this.setCount.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleWidth = this.handleWidth.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    document.title = this.state.value;
    window.addEventListener('resize', this.handleWidth);
    this.fetchUser();
  }

  componentDidUpdate() {
    document.title = this.state.value;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidth);
  }

  setCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
    this.fetchUser();
  }

  handleValueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleWidth() {
    this.setState({
      width: window.innerWidth,
    });
  }

  fetchUser = async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [item] = data.results;
    this.setUser(item);
  };

  setUser(user) {
    this.setState({
      user,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={`card ${theme}`}>
            <PodcastContext.Consumer>
              {podcast => (
                <Item label="Podcast">
                  <h4>{podcast}</h4>
                </Item>
              )}
            </PodcastContext.Consumer>

            <Item label={`Counter value is ${this.state.count}`}>
              <button onClick={this.setCount}>Click me</button>
            </Item>

            <Item label={`${this.state.value}`}>
              <input
                value={this.state.value}
                onChange={this.handleValueChange}
              />
            </Item>

            <Item label={`Browser window is`}>
              <h4>{this.state.width}</h4>
            </Item>

            <Item label="Fetch User">
              <div>{this.state.user ?
                  `${this.state.user.name.first} ${this.state.user.name.last}` : ''}
              </div>
            </Item>

          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
