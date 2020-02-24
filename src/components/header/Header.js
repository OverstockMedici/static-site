import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'components/Router'
import { HeaderWrapper, SiteHeader, LogoImg, Open } from './header.style';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import HamburgerIcon from '../icons/HamburgerIcon';
import { nav } from '../../content/nav.content';
import { Context } from '../../store';

const logo = '/img/medici-ventures-logo.png';

export default function Header() {
    const { store, dispatch } = useContext(Context);
    const [state, setState] = useState({
        showNav: false,
        windowWidth: null
    });

    useEffect(() => {
        const setDeviceWidth = () => {
            setState({ ...state, windowWidth: window.innerWidth });
        };

        setDeviceWidth(); // run once on intial load
        window.onresize = () => {
            let resizeTimer;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setDeviceWidth, 100);
        };
    }, []);

    useEffect(() => {
        if (store.isMobile && (state.windowWidth > 640)) {
            dispatch({ type: 'setDesktopLayout' });
        } else if (!store.isMobile && state.windowWidth && (state.windowWidth <= 640)) {
            dispatch({ type: 'setMobileLayout' });
        } // else do nothing
    }, [state.windowWidth]);

    const toggleClose = () => {
        setState({ ...state, showNav: !state.showNav });
    };

    const renderNav = () => (
        store.isMobile ?
            <MobileNav handleClose={toggleClose} nav={nav} showNav={state.showNav} /> :
            <DesktopNav nav={nav} />
    );

    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <HeaderWrapper>
            <SiteHeader id="siteHeader">
                {(
                    store.isMobile
                    && <Open onClick={toggleClose} aria-label="hamburger menu" title="hamburger menu"><HamburgerIcon className="hamburger-icon" width={24} height={18} /></Open>
                )}
                <Link to="/"><LogoImg src={logo} alt="Medici Ventures Logo" /></Link>
                {renderNav()}
            </SiteHeader>
        </HeaderWrapper>
    );
}
