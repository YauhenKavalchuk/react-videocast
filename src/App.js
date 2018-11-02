import React, { useContext } from 'react';
import Item from './Item';
import { ThemeContext, PodcastContext } from './app-context';

const App = () => {
  const podcast = useContext(PodcastContext);
  const theme = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <Item label="language">
        <h4>{podcast}</h4>
      </Item>
    </div>
  );
};

export default App;
