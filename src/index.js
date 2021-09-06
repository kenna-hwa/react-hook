import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//useEffect 기본

const App = () => {

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

