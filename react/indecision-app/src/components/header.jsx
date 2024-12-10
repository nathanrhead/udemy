import React from 'react';

const Header = ({ title = 'Indecision App', subtitle = 'Let a Computer Decide' }) => (
  <div className='header'>
    <div className='container'>
      <h1 className='header__title'>{title}</h1>
      <h2 className='header__subtitle'>{subtitle}</h2>
    </div>
  </div>
)

export { Header as default };