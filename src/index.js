import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  //useEffect 기본
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={function(){setCount(count+1)}}>더하기</button>
      <button onClick={()=>setCount(count-1)}>빼기</button>

    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

