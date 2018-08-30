import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openFormular as openFormularAction } from '../../actions/openAccordion';
import { HEADLINE, DESCRIPTION1, DESCRIPTION2 } from '../../constants/text';

const Intro = ({ openAccordion }) => (
    <div className="tapp__intro">
        <h1 className="headline">
            {HEADLINE}
        </h1>
        <p>
            {DESCRIPTION1}
            <a href="#request" onClick={openAccordion}>hier</a>
            {DESCRIPTION2}
        </p>
    </div>
);

Intro.propTypes = {
    openAccordion: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    openAccordion: () => dispatch(openFormularAction()),
});

export default connect(undefined, mapDispatchToProps)(Intro);
