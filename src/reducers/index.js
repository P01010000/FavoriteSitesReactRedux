import { combineReducers } from 'redux';

import userList from './userList';
import fetchData from './fetchData';
import fetchSites from './fetchSites';

export default combineReducers({
    userList,
    fetchData,
    fetchSites
});
