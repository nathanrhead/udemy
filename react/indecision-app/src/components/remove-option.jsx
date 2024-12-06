import React from 'react';

const RemoveOption = props => {
  return (
    <p style={{ cursor:'pointer', margin:'0' }} onClick={() => props.removeOption(props.option)}>Remove</p>
  );
}

export default RemoveOption;