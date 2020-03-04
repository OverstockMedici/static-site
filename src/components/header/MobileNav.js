import React from 'react';
import { arrayOf, bool, shape, func } from 'prop-types';
import { Nav, StyledLink, Close } from './header.style';
import CloseIcon from '../icons/CloseIcon';

export default function MobileNav(props) {
    const { handleClose, nav, showNav } = props;
    const buildLinks = nav.map(item => (
        <StyledLink to={item.link} key={item.link} onClick={handleClose}>{item.name}</StyledLink>
    ));

    return (
        <Nav className={`mobile-nav${showNav ? ' open' : ''}`}>
            <Close aria-label="Close Nav Menu" title="Close Nav Menu" onClick={handleClose}>
                <CloseIcon />
            </Close>
            <StyledLink to="/">Home</StyledLink>
            {buildLinks}
        </Nav>
    );
}

MobileNav.propTypes = {
    handleClose: func,
    nav: arrayOf(shape({})),
    showNav: bool
}

// MobileNav.defaultProps = {
//     handleClose: null,
//     nav: [{}],
//     showNav: true
// }
