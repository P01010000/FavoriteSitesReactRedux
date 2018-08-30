import { OPEN_ACCORDION } from '../actions/openAccordion';

export const initialState = { search: true, form: false };

const openAccordion = (state = initialState, action) => {
  switch (action.type) {
      case OPEN_ACCORDION:
      console.log(action);
          return Object.assign({}, state, {
            search: action.data.search,
            form: action.data.form,
          });
      default:
          return state;
  }
};

export default openAccordion;
