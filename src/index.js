import React, { useState } from 'react';
import ReactDOM from 'react-dom';

  //useEffect 기본

// function App(){
//   const [count, setCount] = useState(0);
//   const incrementCount = () => setCount(count+1);
//   const decrementCount = () => setCount(count-1);

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={incrementCount}>더하기</button>
//       <button onClick={decrementCount}>빼기</button>

//     </div>
//   )
// }

//class 로 변경

class AppClass extends React.Component {

    state = {
      count : 0
    }

    render(){
      const { count } = this.state;
      return (
        <div className="App">
          <h1>{count}</h1>
          <button onClick={this.incrementCount}>더하기</button>
          <button onClick={this.decrementCount}>빼기</button>
    
        </div>
      )
    }
    incrementCount = () => this.setState(
      state => {
        return {
          count : state.count + 1
        }
      }
    )
    decrementCount  = () => this.setState(
      state => {
        return {
          count : state.count - 1
        }
      }
    )

}

const rootElement = document.getElementById('root');
ReactDOM.render(<AppClass/>, rootElement);

