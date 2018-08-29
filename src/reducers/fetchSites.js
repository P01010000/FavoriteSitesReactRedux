import { Map } from 'immutable';
import { SAVE_SERVER_SITES } from '../actions/fetchSites';

export const initialState = Map();

const fetchSites = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SERVER_SITES:
            return state.set('sites', action.data.sites)
            .set('reachedEnd', action.data.reachedEnd);
        default:
            return state;
    }
};

export default fetchSites;
