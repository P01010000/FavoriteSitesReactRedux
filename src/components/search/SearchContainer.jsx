import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchHead from './SearchHead';
import ResultList from '../result/ResultList';
import './SearchContainer.scss';
import { loadSites as loadSitesAction } from '../../actions/fetchSites';

class SearchContainer extends React.Component {
  static propTypes = {
    sites: PropTypes.instanceOf(Array).isRequired,
    start: PropTypes.number.isRequired,
    take: PropTypes.number,
    reachedEnd: PropTypes.bool,
    searchString: PropTypes.string.isRequired,
    defaultSearch: PropTypes.string.isRequired,
    loadSites: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
  }

  static defaultProps = {
    take: 20,
    reachedEnd: true
  }

  constructor(props) {
    super(props);
    this.loadNewData = this.loadNewData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  componentDidMount() {
    this.loadNewData(this.props.defaultSearch);
  }

  loadNewData(searchString) {
    this.props.loadSites(searchString || this.props.defaultSearch, 0, this.props.take, false);
  }

  loadMoreData() {
    this.props.loadSites(this.props.searchString, this.props.start, this.props.take, true);
  }

  render() {
    return (
      <div className={`accordion ${this.props.open ? 'accordion--open' : ''}`} data-group="site" >
        <SearchHead callback={this.loadNewData} />
        <ResultList sites={this.props.sites} callback={this.loadMoreData} reachedEnd={this.props.reachedEnd} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    sites: state.fetchSites.sites,
    searchString: state.fetchSites.searchString,
    start: state.fetchSites.start,
    reachedEnd: state.fetchSites.reachedEnd,
    open: state.openAccordion.search
  });

const mapDispatchToProps = (dispatch, ownProps) => (Object.assign({}, ownProps, {
    loadSites: (searchString, start, take, append) => dispatch(loadSitesAction(searchString, start, take, append))
}));

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
