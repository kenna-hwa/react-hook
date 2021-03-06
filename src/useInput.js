import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//useInput

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { target : { value } } = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value)
    }
    if(willUpdate) {
      setValue(value);
    }  
  };
  return { value, onChange }
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  
  const name = useInput("Mr.", maxLen);

  return (
  <div>
    <h1>hello</h1>
    <input type="text" {...name} />

  </div>
  )
}
export default App;
