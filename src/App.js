import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper  from "./Paper";

function App() {
const arr = [10 , 20 , 40]
const res = arr.find(item =>{
  console.log(item > 15)
 return  item > 15
} )
console.log('res', res)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


             {/* <Paper  test={'world'} /> */}
        {/* {arr.map((item ,index)=>{
      console.log(item)
      console.log('index', index)
          return (
            <Paper key={index} str={item} test={'test'}/>

        <Paper str={'item'}/> */}
         {/* {arr.map((item ,index)=>{
         return  <Paper  num={'str'} str={item} />
         })} */}
          <Paper  num={'str'} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
