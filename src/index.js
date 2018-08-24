import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.css';
import App from './components/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

ReactDOM.render(
    <Root>
        <App />
    </Root>, document.querySelector('#root')
);