export const SAVE_SERVER_SITES = 'SAVE_SERVER_SITES';
export const saveServerSites = data => ({
    type: SAVE_SERVER_SITES,
    data
});

/**
 * Example for an async actions, requires redux thunk middleware
 * //redux.js.org/docs/advanced/AsyncActions
 */
export const loadSites = (searchString, start, take) => (dispatch) => {
    chayns.showWaitCursor();
    fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${start}&Take=${take}`)
        .then((res) => {
            if (!res.ok) throw new Error(`${res.status}\n${res.statusText}`);
            return res.json();
        })
        .then(data => data.Data || [])
        .then(data => dispatch(saveServerSites(({ sites: data, reachedEnd: data.length < take }))))
        .finally(() => chayns.hideWaitCursor());
};
