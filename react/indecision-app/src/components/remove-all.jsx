import React from 'react';

const RemoveAll = props => {
  return(
    <button className='button button--link' onClick={props.removeAll}>Remove All</button>
  );
}

export default RemoveAll;
