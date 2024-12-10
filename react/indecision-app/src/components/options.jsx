import React from 'react';
import AddOption from './add-option';
import Option from './option';
import RemoveAll from './remove-all';

const Options = props => (
  <div className='widget'>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      {props.options.length > 0 && <RemoveAll removeAll={props.removeAll} />}
    </div>
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
  </div>
);

export { Options as default };