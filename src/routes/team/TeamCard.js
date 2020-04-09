import React from 'react';

const TeamCard = ({ name, image, title, info }) => {
    return (
        <figure data-testid="team-card" key={name}>
            <img src={image} alt={name} />
            <figcaption>
                <div className="employee-name">{name}</div>
                <div className="employee-title">/ {title}</div>
                <div className="employee-info">{info}</div>
            </figcaption>
        </figure>
    );
};

export default TeamCard;
