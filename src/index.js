import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './store/store'

// Bootstrap & CSS
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/bootstrap/dist/js/bootstrap.js');
// Custom css
require('./res/css/style.css');



let store = configureStore();

render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('recovery_app')
);
