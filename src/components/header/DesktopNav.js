import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Nav, StyledLink } from './header.style';

export default function DesktopNav(props) {
    const buildLinks = props.nav.map(item => (
        <StyledLink to={item.link} key={item.link}>{item.name}</StyledLink>
    ));

    return (
        <Nav className="desktop-nav">
            {buildLinks}
        </Nav>
    );
}

DesktopNav.propTypes = {
    nav: arrayOf(shape({
        link: string,
        name: string
    }))
};

DesktopNav.defaultProps = {
    nav: []
};
