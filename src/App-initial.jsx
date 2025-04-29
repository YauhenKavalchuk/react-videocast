import { useState, useMemo, useCallback, memo } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count => count + 1)
  }

  return (
    <div className="app"> 
      <Title />
      <CountInfo count={count} />
      <button onClick={incrementCount}>+1</button>
    </div>
  );
};

const Title = () => {
  return (
    <>
      <h1>React.memo vs. useCallback vs. useMemo</h1>
    </>
  );
}

const CountInfo = ({ count }) => {
  return (
    <h2>Count value {count}</h2>
  );
}

export default App;
