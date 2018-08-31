export const SEARCH_CONTAINER = 'SEARCH_CONTAINER';
export const FORMULAR = 'FORMULAR';

export const OPEN_ACCORDION = 'OPEN_ACCORDION';
export const openAccordion = data => ({
    type: OPEN_ACCORDION,
    data
});

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const toggleSearch = data => ({
    type: TOGGLE_SEARCH,
    data
});

export const TOGGLE_FORMULAR = 'TOGGLE_FORMULAR';
export const toggleFormular = data => ({
    type: TOGGLE_FORMULAR,
    data
});

/**
 * Example for an async actions, requires redux thunk middleware
 * //redux.js.org/docs/advanced/AsyncActions
 */
export const openFormular = () => dispatch => dispatch(openAccordion({ search: false, form: true }));
