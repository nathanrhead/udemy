import React from 'react';

const RemoveOption = props => {
  return (
    <button className='button button--link' onClick={() => props.removeOption(props.option)}>Remove</button>
  );
}

export default RemoveOption;