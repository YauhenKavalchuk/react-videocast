import React, { useContext, useState, useEffect } from 'react';
import Item from './Item';
import { ThemeContext, PodcastContext } from './app-context';

const App = () => {
  const podcast = useContext(PodcastContext);
  const theme = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [value, changeValue] = useState('Test value');
  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(null);

  const handleValueChange = (e) => {
    changeValue(e.target.value);
  }

  useEffect(() => {
    document.title = value;
  });

  useEffect(() => {
    const handleWidth = setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  });

  useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [item] = data.results;
    setUser(item);
  }, [count]);

  return (
    <div className={`card ${theme}`}>
      <Item label="language">
        <h4>{podcast}</h4>
      </Item>

      <Item label={`Counter value is ${count}`}>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </Item>

      <Item label={`${value}`}>
        <input
          value={value}
          onChange={handleValueChange}
        />
      </Item>

      <Item label={`Browser window is`}>
        <h4>{width}</h4>
      </Item>

      <Item label="Fetch User">
        <div>{user ? `${user.name.first} ${user.name.last}` : ''}</div>
      </Item>

    </div>
  );
};

export default App;
