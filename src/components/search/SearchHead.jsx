import React from 'react';
import PropTypes from 'prop-types';
import { OVERVIEW, SEARCH } from '../../constants/text';

class SearchHead extends React.Component {
  static propTypes = {
    callback: PropTypes.func.isRequired
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
      <div className="accordion__head search">
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

export default SearchHead;
