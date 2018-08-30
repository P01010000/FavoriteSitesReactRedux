export const OPEN_ACCORDION = 'OPEN_ACCORDION';
export const openAccordion = data => ({
    type: OPEN_ACCORDION,
    data
});

/**
 * Example for an async actions, requires redux thunk middleware
 * //redux.js.org/docs/advanced/AsyncActions
 */
export const openFormular = () => dispatch => dispatch(openAccordion({ search: false, form: true }));
