import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//useInput

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target : { value }
    } = event;
  
    let willUpdate = true;
    if (typeof validator == "function"){
      willUpdate = validator(value)
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange }

}

//useEffect 기본

function App(){

  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen)

  return (
    <div className="App">
      <h1>hello</h1>
      <input {...name} />
    </div>
  )
}

//class 로 변경

// class AppClass extends React.Component {

//     state = {
//       count : 0
//     }

//     render(){
//       const { count } = this.state;
//       return (
//         <div className="App">
//           <h1>{count}</h1>
//           <button onClick={this.incrementCount}>더하기</button>
//           <button onClick={this.decrementCount}>빼기</button>
    
//         </div>
//       )
//     }
//     incrementCount = () => this.setState(
//       state => {
//         return {
//           count : state.count + 1
//         }
//       }
//     )
//     decrementCount  = () => this.setState(
//       state => {
//         return {
//           count : state.count - 1
//         }
//       }
//     )

// }

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

