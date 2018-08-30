import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './intro/Intro';
import SearchContainer from './search/SearchContainer';
import Formular from './formular/Formular';

const App = () => (
    <div>
        <Intro />
        <div className="tapp__content">
            <SearchContainer defaultSearch="chayns" />
            <Formular />
        </div>
    </div>
);

export default hot(module)(App);
