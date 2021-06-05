import React, { useState } from "react";
import '../App.css'
import {increaseCount, decreaseCount} from '../actions'
import {useSelector, useDispatch} from 'react-redux'

const Counter = (props) => {
  const count1 = useSelector((state) => state.count1);
  const count2 = useSelector((state) => state.count2);
  const count3 = useSelector((state) => state.count3);
  let count;
  const name = props.name;
  if (name == "count1") {
    count = count1;
  } else if (name == "count2") {
    count = count2;
  } else {
    count = count3;
  }

  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <button id="minusBtn" onClick={() => dispatch(decreaseCount(name, count))}>-</button>
      <h1>{count}</h1>
      <button id="plusBtn" onClick={() => dispatch(increaseCount(name, count))}>+</button>
    </div>
  );
};

export default Counter;
