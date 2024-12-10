import React from 'react';
import RemoveOption from './remove-option';

const Option = props => (
  <div>
    <p>
      {props.option}
    </p>
    <RemoveOption removeOption={props.removeOption} option={props.option} />
  </div>
);

export default Option;