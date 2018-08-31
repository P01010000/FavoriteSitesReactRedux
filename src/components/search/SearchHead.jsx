import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OVERVIEW, SEARCH } from '../../constants/text';
import { toggleSearch as toggleSearchAction } from '../../actions/openAccordion';

class SearchHead extends React.Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    toggleSearch: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = { timeout: undefined };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    clearTimeout(this.state.timeout);
    this.state.searchString = ev.target.value;
    this.state.timeout = setTimeout(() => this.props.callback(this.state.searchString), 400);
  }

  render() {
    return (
      <div className="accordion__head search" onClick={() => setTimeout(() => this.props.toggleSearch(), 1)}>
        <div className="accordion--trigger accordion__head--search--wrapper">
          <div className="accordion--trigger accordion__head--search">
              {OVERVIEW}
          </div>
        </div>
        <div className="Suche Suche--accordion chayns__border-color--50">
          <input type="text" placeholder={SEARCH} id="searchFilter" onKeyUp={this.handleChange} defaultValue="" />
          <label><i className="fa fa-search" /></label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => Object.assign({}, ownProps, {
  toggleSearch: () => dispatch(toggleSearchAction())
});

export default connect(undefined, mapDispatchToProps)(SearchHead);
