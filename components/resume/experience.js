import React from 'react';
import PropTypes from 'prop-types';

import style from './experience.module.scss';

export default function Experience({ data }) {
    return (
        <div className={style.experience}>
            <div className={style.company}>
                <h3>{data.company}</h3>&nbsp;
                <span>{data.sector}</span>
            </div>
            <div className={style.titleDuration}>
                <span className={style.title}>{data.title}</span>&nbsp;|&nbsp;
                <span className={style.duration}>{data.duration}</span>
                <div className={style.techUsed}>{data.techUsed.join(', ')}</div>
            </div>
            <ul className={style.description}>
                {data.description.map((item, index) => {
                    return (
                        <li className={style.descriptionItem} key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

Experience.propTypes = {
    data: PropTypes.object,
    sector: PropTypes.string
};
