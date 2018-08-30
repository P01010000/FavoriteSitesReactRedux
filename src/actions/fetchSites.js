export const SAVE_SERVER_SITES = 'SAVE_SERVER_SITES';
export const saveServerSites = data => ({
    type: SAVE_SERVER_SITES,
    data
});

export const LOAD_SITES_NEW = 'LOAD_SITES_NEW';
export const loadSitesNew = data => ({
    type: LOAD_SITES_NEW,
    data
});

export const LOAD_SITES_APPEND = 'LOAD_SITES_APPEND';
export const loadSitesAppend = data => ({
    type: LOAD_SITES_APPEND,
    data
});

/**
 * Example for an async actions, requires redux thunk middleware
 * //redux.js.org/docs/advanced/AsyncActions
 */
export const loadSites = (searchString, start, take, append) => async (dispatch) => {
    chayns.showWaitCursor();
    const result = { searchString, sites: [], reachedEnd: true };
    try {
        const res = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${start}&Take=${take}`);
        if (!res.ok) throw new Error(`${res.status}\n${res.statusText}`);
        const data = await res.json();
        result.sites = data.Data || [];
        result.reachedEnd = result.sites.length < take;
        if (!append) {
            dispatch(loadSitesNew(result));
        } else {
            dispatch(loadSitesAppend(result));
        }
    } catch (err) {
        dispatch(loadSitesNew(result));
    }
    chayns.hideWaitCursor();
};
