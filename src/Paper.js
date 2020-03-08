import React, { useState } from "react";
import PropTypes from "prop-types";
import { increment } from "./utils";
import TextArea from "./TextArea";
import TextHeader from "./TextHeader";


const Paper = props => {
  console.log(props.num);

  // react hook
//   const [count, setCount] = useState(props.num);
//   const [flag, setFlag] = useState(false);
  const [text, setText] = useState();
  ///
  //  let count = 0 ;
  //  const setCount=(newCount)=>{
  //       count =  newCount
  //  }

  // count = 5
  // console.log(increment(4))
  const convertText =(text)=>{
    setText(text)
  }

  return (
    <div>
      {/* <h1>{text}</h1> */}
      <TextHeader count ={7} />
       
      {/* <h1> {count}</h1> */}
      {/* <h1> {props.test}</h1> */}
      {/* setText(event.target.value) */}
      <TextArea fn={convertText} />
      <p> {props.str}</p>
     
      {/* <button onClick={() => setCount(count + 1)}>button</button> */}
    </div>
  );
};

Paper.propTypes = {
  num: PropTypes.number,
  str: PropTypes.string
};
export default Paper;
