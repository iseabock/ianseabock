import React from 'react';
import PropTypes from 'prop-types';

import style from './experience.module.scss';

export default function Company({ company, sector }) {
    return (
        <div className={style.company}>
            <h3>{company}</h3>&nbsp;
            <span>{sector}</span>
        </div>
    );
}

Company.propTypes = {
    company: PropTypes.string,
    sector: PropTypes.string
};
