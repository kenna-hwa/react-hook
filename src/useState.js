// import React, { useState } from "react";
import React from "react";
import { Component } from "react";


// const UseState = () => {

//     const [item, setItem] = useState(1);
//     const incrementItem = () => setItem(item+1);
//     const decrementItem = () => setItem(item-1);
//     //함수를 두개 만들어서 setitem을 쓰는군
//     return (
//     <div>
//         <h1>useState</h1>
//         <p>{ item }</p>
//         <p>{ setItem }</p>
//         <button onClick={incrementItem}>더하기</button>
//         <button onClick={decrementItem}>빼기</button>

//     </div>    
//     )
// }


class UseState extends React.Component{

    state = {
        item : 0,
    }

    add = () => {
        this.setState(current => ({
            item: current.item+1,
        }))
    }
    minus = () => {
        this.setState(current=>({
            item: current.item-1,
        }))
    }

    render(){
        const { item } = this.state;
        return(
            <div>
            <h1>hello</h1>
            <p>{ item }</p>
            <button onClick={this.add}>증가</button>
            <button onClick={this.minus}>감소</button>
            </div>
        )
    }

}

export default UseState;