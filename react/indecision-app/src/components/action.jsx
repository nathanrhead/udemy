import React from 'react';

const Action = props =>  (
  <div>
    <button className='big-button' onClick={props.handlePick}>What Should I Do?</button>
  </div>
);

export { Action as default };