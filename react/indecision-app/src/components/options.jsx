import React from 'react';
import AddOption from './add-option';
import Option from './option';
import RemoveAll from './remove-all';

const Options = props => (
  <div>
    {props.options.length ? 
    (
      props.options.map((option, key) => (
        <Option 
          key={key} 
          option={option} 
          removeOption={props.removeOption} 
        />
      ))
    )
    :
    (
      <p>Add an option to get started.</p>
    )}
    <AddOption addOption={props.addOption} />
    {props.options.length > 0 && <RemoveAll removeAll={props.removeAll} />}
  </div>
);

export { Options as default };