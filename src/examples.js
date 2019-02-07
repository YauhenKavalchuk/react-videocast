//---------useState------------

// Importing useState hook
import React, { useState } from 'react';

export const Counter = () => {
  // Creating state
  const [count, setCount] = useState(0);

  return(
    <>
      {/* Display count value */}
      <h1>{count}</h1>
      {/* Manipulate with state count value */}
      <button onClick={() => setCount(count + 1)}>+1</button>
​      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};

//---------useState------------

// Importing useState hook
import React, { useState } from 'react';

export const Counter = () => {
  // Creating state
  const [count, setCount] = useState(0);

  return(
    <>
      {/* Set count value using input */}
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      {/* Display count value */}
      <h1>{count}</h1>
      {/* Manipulate with state count value */}
      <button onClick={() => setCount(count + 1)}>+1</button>
​      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};

//---------useContext------------

// (1) File context.js
import React from 'react';
export const ThemeContext = React.createContext('main-theme');

// (2) File App.js
// Importing ThemeContext
​import { ThemeContext } from './context';
// Importing useContext hook
import React, { useContext } from 'react';

export const App = () => {
  // Assign the result of the hook work to a variable
  const theme = useContext(ThemeContext);

  return <App theme={theme} />;
};

//---------useEffect------------

// Importing useState & useEffect hooks
import React, { useState, useEffect } from 'react';

export const Counter = () => {
  // Creating state
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return(
    <>
      {/* Display count value */}
      <h1>{count}</h1>
      {/* Manipulate with state count value */}
      <button onClick={() => setCount(count + 1)}>+1</button>
​      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};

//---------useEffect with async------------

// Importing useState & useEffect hooks
import React, { useState, useEffect } from 'react';

// Simple async function
const fetchUser = async (setUser) => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  setUser(data.results[0]);
}

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(
    () => { fetchUser(setUser) },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return(
    <div>{user ? `${user.name.first} ${user.name.last}` : 'Loading...'}</div>
  );
}

//---------useRef------------

import React, { useRef, useEffect } from 'react';

const App = () => {
  const ref = useRef(null);

  // Set focus to 2-nd element when component rendered
  useEffect(() => {
    ref.current.focus();
  });

  return(
    <>
      <input type="text" />
      <input ref={ref} type="number" />
    </>
  );
}

//---------useReducer------------

import React, { useReducer } from 'react';

// Store
const initialState = { count: 0 };

// Reducer
const reducer = ({ count }, { type }) => {
  switch (type) {
    case 'increment': return { count: count + 1 };
    case 'decrement': return { count: count - 1 };
    default: return {};
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <>
      <div>{state.count}</div>
      {/* Actions */}
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
    </>
  );
};

//---------useLayoutEffect ------------

import React, { useLayoutEffect } from 'react';

const Modal = ({ onClose }) => {

  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => document.body.style.overflow = 'visible';
  }, []); // Empty array ensures effect is only run on mount and unmount

  return(
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal">
        <h2>Modal Title</h2>
        <p>Modal content</p>
      </div>
    </div>
  );
};

//---------useCallback & useMemo------------

import React, { useCallback, useMemo } from 'react';

// Callback
const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);

// Memo
const memoizedValue = useMemo(() => sum(a, b), [a, b]);
