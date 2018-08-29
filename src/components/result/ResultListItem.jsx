import React from 'react';
import PropTypes from 'prop-types';

class ResultListItem extends React.Component {
    static propTypes = {
        appstoreName: PropTypes.string.isRequired,
        siteId: PropTypes.string.isRequired,
        locationId: PropTypes.number.isRequired
    }

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="accordion__item">
                <div className="ListItem ListItem--clickable" onClick={() => chayns.openUrlInBrowser(`https://chayns.net/${this.props.siteId}`)} onKeyPress={() => undefined} >
                    <div className="ListItem__head">
                        <div className="ListItem__Image" style={{ backgroundImage: `url(https://sub60.tobit.com/l/${this.props.locationId})`, backgroundSize: 'contain' }} />
                        <div className="ListItem__Title">
                            <p className="ListItem__Title--headline">{this.props.appstoreName}</p>
                            <p className="ListItem__Title--description">{this.props.siteId}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultListItem;
