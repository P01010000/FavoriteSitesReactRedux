import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import ResultListItem from './ResultListItem';
import './ResultList.scss';
import { SHOW_MORE, NOTHING_FOUND } from '../../constants/text';
import { loadSites as loadSitesAction } from '../../actions/fetchSites';

class ResultList extends React.Component {
    static propTypes = {
        sites: PropTypes.instanceOf(Array).isRequired,
        reachedEnd: PropTypes.bool,
        callback: PropTypes.func.isRequired
    }

    static defaultProps = {
        reachedEnd: true
    }

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const listItems = this.props.sites.map(t => <ResultListItem key={t.siteId} {...t} />);
        return (
            <div className={`accordion__body color--${chayns.env.parameters.colormode}`} >
                {listItems}
                {!this.props.reachedEnd ?
                    <div className="accordion__content">
                        <div style={{ textAlign: 'right' }} >
                            <a href="#" onClick={this.props.callback} onKeyPress={() => undefined} >{ SHOW_MORE }</a>
                        </div>
                    </div>
                    : undefined}
                {this.props.sites.length === 0 ?
                    <div className="accordion__content">{NOTHING_FOUND}</div>
                    : undefined}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: (searchString, start, take) => dispatch(loadSitesAction(fromJS(searchString, start, take))),
});

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return Object.assign({}, ownProps, { sites: state.fetchSites.size > 0 ? state.fetchSites.get('sites') : [] });
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
