import { combineReducers } from 'redux';

import fetchSites from './fetchSites';
import openAccordion from './openAccordion';

export default combineReducers({
    fetchSites,
    openAccordion
});
