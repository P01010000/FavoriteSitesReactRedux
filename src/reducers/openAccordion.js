import { OPEN_ACCORDION, TOGGLE_SEARCH, TOGGLE_FORMULAR } from '../actions/openAccordion';

export const initialState = { search: true, form: false };

const openAccordion = (state = initialState, action) => {
  switch (action.type) {
      case OPEN_ACCORDION:
          return Object.assign({}, state, {
            search: action.data.search,
            form: action.data.form,
          });
      case TOGGLE_SEARCH:
          return { search: !state.search, form: false };
      case TOGGLE_FORMULAR:
          return { search: false, form: !state.form };
      default:
          return state;
  }
};

export default openAccordion;
