import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import SearchHead from './SearchHead';
import ResultList from '../result/ResultList';
import './SearchContainer.scss';
import { loadSites as loadSitesAction } from '../../actions/fetchSites';

class SearchContainer extends React.Component {
  static propTypes = {
    defaultSearch: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      sites: [],
      reachedEnd: true,
      start: 0,
      take: 20,
      defaultSearch: props.defaultSearch,
      searchString: props.defaultSearch,
    };
    this.loadNewData = this.loadNewData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  componentDidMount() {
    this.loadNewData(this.state.defaultSearch);
  }

  async loadNewData(searchString) {
    console.log(this.props);
    this.props.loadSites(searchString, 0, 20);
    this.loadSiteData(searchString || this.state.defaultSearch, 0, this.state.take, false);
  }

  async loadMoreData() {
    this.props.loadSites('chayns', 20, 20);
    this.loadSiteData(this.state.searchString, this.state.start, this.state.take, true);
  }

  async loadSiteData(searchString, start, take, append) {
    try {
      //const result = await fetchSites(searchString, start, take);
      this.setState({
        sites: append ? this.state.sites.concat(result.sites) : result.sites,
        searchString,
        start: start + result.sites.length,
        reachedEnd: result.reachedEnd
       });
    } catch (err) {
      this.setState({});
    }
  }

  render() {
    return (
      <div className="accordion accordion--open" data-group="site" style={{ overflow: 'hidden', marginTop: '30px' }} >
        <SearchHead callback={this.loadNewData} />
        <ResultList sites={this.state.sites} callback={this.loadMoreData} reachedEnd={this.props.reachedEnd} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.fetchSites.get('reachedEnd'));
  return Object.assign({}, ownProps, { reachedEnd: state.fetchSites.get('reachedEnd') });
};

const mapDispatchToProps = (dispatch, ownProps) => (Object.assign({}, ownProps, {
    loadSites: (searchString, start, take) => dispatch(loadSitesAction(searchString, start, take))
}));

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
