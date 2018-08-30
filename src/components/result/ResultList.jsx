import React from 'react';
import PropTypes from 'prop-types';
import ResultListItem from './ResultListItem';
import './ResultList.scss';
import { SHOW_MORE, NOTHING_FOUND } from '../../constants/text';

const ResultList = ({ sites, reachedEnd, callback }) => (
    <div className={`accordion__body color--${chayns.env.parameters.colormode}`} >
        {sites.map(t => <ResultListItem key={t.siteId} {...t} />)}
        {!reachedEnd ?
            <div className="accordion__content">
                <div style={{ textAlign: 'right' }} >
                    <a href="#" onClick={callback} onKeyPress={() => undefined} >{ SHOW_MORE }</a>
                </div>
            </div>
            : undefined}
        {sites.length === 0 ?
            <div className="accordion__content">{NOTHING_FOUND}</div>
            : undefined}
    </div>
);

ResultList.propTypes = {
    sites: PropTypes.instanceOf(Array).isRequired,
    reachedEnd: PropTypes.bool,
    callback: PropTypes.func.isRequired
};

ResultList.defaultProps = {
    reachedEnd: true
};

export default ResultList;
