import React, { useContext, useState } from 'react';
import Item from './Item';
import { ThemeContext, PodcastContext } from './app-context';

const App = () => {
  const podcast = useContext(PodcastContext);
  const theme = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [value, changeValue] = useState('Test value');

  const handleValueChange = (e) => {
    changeValue(e.target.value);
  }

  return (
    <div className={`card ${theme}`}>
      <Item label="Podcast">
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
    </div>
  );
};

export default App;
