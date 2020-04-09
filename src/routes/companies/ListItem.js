import React from 'react';

const ListItem = ({ link, name, image, color, description }) => {
    return (
        <a
            data-testid="list"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={image} alt={`${name} logo`} />
            <div
                data-testid="list-style"
                className="company-description"
                style={{ borderColor: `${color}` }}
            >
                {description}
            </div>
        </a>
    );
};

export default ListItem;
