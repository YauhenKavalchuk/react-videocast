import { useState, useMemo, useCallback, memo } from 'react';
import './App.css';

const delayedDouble = (num) => {
  for (let i = 0; i < 1999999999; i++);
  return num * 2;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [firstHook, setFirstHook] = useState('useCallback');
  const [secondHook, setSecondHook] = useState('useMemo');

  const doubleCount = useMemo(() => delayedDouble(count), [count]);

  const themeStyle = {
    backgroundColor: dark ? '#0e0e0f' : '#282c34',
  };

  const incrementCount = () => {
    setCount(count => count + 1);
  }

  const setDarkTheme = () => {
    setDark((prev) => !prev);
  }

  const resetCount = useCallback(() => {
    setCount(0)
  }, []);

  const hooks = useMemo(() => ({
    firstHook, secondHook
  }), [firstHook, secondHook]);

  return (
    <div className="app" style={{...themeStyle}}> 
      <Title hooks={hooks} resetCount={resetCount} />
      <CountInfo count={doubleCount} />
      <button onClick={incrementCount}>+1</button>
      <button onClick={setDarkTheme}>Dark</button>
    </div>
  );
};

const Title = memo(({ hooks, resetCount }) => {
  const { firstHook, secondHook } = hooks;
  return (
    <>
      <h1>React.memo vs. {firstHook} vs. {secondHook}</h1>
      <button onClick={resetCount}>Reset</button>
    </>
  );
});

const CountInfo = ({ count }) => {
  return (
    <h2>Count value {count}</h2>
  );
}

export default App;
