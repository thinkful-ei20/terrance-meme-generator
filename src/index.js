import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemeGenerator from './components/meme-generator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MemeGenerator />, document.getElementById('root'));
registerServiceWorker();
