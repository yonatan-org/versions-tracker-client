import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/components/versionsPage/version-page.css';
import '../src/components/versionsPage/dead-man-walking.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
