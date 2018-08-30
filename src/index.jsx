import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import immutable from 'immutable';
import App from './components/App';
import rootReducer from './reducers';

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component then
 * and finally initializes the ModeSwitch.
 * @return {Promise.<void>}
 */
async function init() {
    if (__DEV__ || __STAGING__) {
        const installDevTools = require('immutable-devtools');
        installDevTools(immutable);
    }

    const storeMiddleware = [thunk];

    if (__DEV__ || __STAGING__) {
        storeMiddleware.push(require('redux-logger').default);
    }

    console.log(storeMiddleware);
    const store = createStore(
        rootReducer,
        applyMiddleware(...storeMiddleware)
    );

    await chayns.ready;

    const tappElement = document.querySelector('.tapp');
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , tappElement
    );
}

init();
