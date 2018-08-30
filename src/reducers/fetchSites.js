import { LOAD_SITES_NEW, LOAD_SITES_APPEND } from '../actions/fetchSites';

export const initialState = { searchString: 'chayns', start: 0, sites: [] };

const fetchSites = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SITES_NEW:
            return Object.assign({}, state, {
                sites: action.data.sites,
                searchString: action.data.searchString,
                start: action.data.sites.length,
                reachedEnd: action.data.reachedEnd
            });
        case LOAD_SITES_APPEND:
            return Object.assign({}, state, {
                sites: state.sites.concat(action.data.sites),
                start: state.start + action.data.sites.length,
                reachedEnd: action.data.reachedEnd
            });
        default:
            return state;
    }
};

export default fetchSites;
