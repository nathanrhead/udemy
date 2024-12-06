import React from 'react';
import RemoveOption from './remove-option';

const Option = props => (
  <div style={{ display:'flex', alignItems:'flex-end'}}>
    <p style={{ margin:'0'}}>
      {props.option}
    </p>
    <RemoveOption removeOption={props.removeOption} option={props.option} />
  </div>
);

export default Option;