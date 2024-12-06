import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import IndecisionApp from './components/indecision-app';
import Modal from 'react-modal';

// Define the app element for react-modal.
Modal.setAppElement('#root');

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<IndecisionApp options={['Thing One', 'Thing Two']} />);
