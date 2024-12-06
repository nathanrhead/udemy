import React from 'react';

const Header = ({ title = 'Indecision App', subtitle = 'Let a Computer Decide' }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
)

export { Header as default };