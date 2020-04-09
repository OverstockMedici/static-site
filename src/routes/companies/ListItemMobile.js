import React from 'react';

const ListItemMobile = ({
    link,
    name,
    image,
    color,
    description,
    linkText,
    openCompanyName,
    cardStyle,
    toggleDescriptionOpen,
}) => {
    return (
        <div
            data-testid="list-mobile"
            className={cardStyle}
            onClick={() => toggleDescriptionOpen(name)}
        >
            <img src={image} alt={`${name} logo`} />
            <div
                data-testid="list-mobile-style"
                className="company-description"
                style={{ backgroundColor: `${color}` }}
            >
                {description} Visit{' '}
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {linkText}
                </a>
            </div>
        </div>
    );
};

export default ListItemMobile;
