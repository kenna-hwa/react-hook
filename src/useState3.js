import React, { useState } from "react";





function App() {


    const [num, setNum] = useState(0);
    const incre = () => setNum(num+1);
    const decre = () => setNum(num-1);


    return(
        <div>
            <h1>{ num } </h1>
            <button onClick={incre}>더하기</button>
            <button onClick={decre}>빼기</button>
        </div>
    )

}
export default App;