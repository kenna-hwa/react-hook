import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(){
  //useEffect 기본
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count+1);
  const decrementCount = () => setCount(count-1);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incrementCount}>더하기</button>
      <button onClick={decrementCount}>빼기</button>

    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

