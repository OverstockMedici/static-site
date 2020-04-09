import React from 'react';
import { StyledArrow } from './team.style';

const arrowRight = '/img/arrow-right-green.png';

const ListingsRow = ({ title, url }) => {
    return (
        <div data-testid="listings-row" key={title} className="job-listing">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
            </a>
            <div className="job-description">
                <a
                    href={url}
                    title="Read Full Job Description"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StyledArrow src={arrowRight} alt="View Job" />
                </a>
            </div>
        </div>
    );
};

export default ListingsRow;
