import React from 'react';
import PropTypes from 'prop-types';

const ResultListItem = ({ appstoreName: name, siteId, locationId }) => (
    <div className="accordion__item">
        <div className="ListItem ListItem--clickable" onClick={() => chayns.openUrlInBrowser(`https://chayns.net/${siteId}`)} onKeyPress={() => undefined} >
            <div className="ListItem__head">
                <div className="ListItem__Image" style={{ backgroundImage: `url(https://sub60.tobit.com/l/${locationId})`, backgroundSize: 'contain' }} />
                <div className="ListItem__Title">
                    <p className="ListItem__Title--headline">{name}</p>
                    <p className="ListItem__Title--description">{siteId}</p>
                </div>
            </div>
        </div>
    </div>
);

ResultListItem.propTypes = {
    appstoreName: PropTypes.string.isRequired,
    siteId: PropTypes.string.isRequired,
    locationId: PropTypes.number.isRequired
};

export default ResultListItem;
