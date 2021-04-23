import React, { useEffect, useState, useRef, useContext } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Meta from '../../components/Meta';
import { Main, Hero, ContactUs } from './home.style';
import { ButtonLink } from '../../components/ButtonLink';
import { content, meta } from '../../content/companies.content';
import { Context } from '../../store';
import OverviewComponent from './OverviewComponent';
import MobileCompanyList from '../companies/MobileCompanyList';
import DesktopCompanyList from '../companies/DesktopCompanyList';
const { heading1, heading1b } = content;


export default function Home() {
    const { store } = useContext(Context);

    const renderCompanyList = () => (
        store.isMobile ?
            <MobileCompanyList /> :
            <DesktopCompanyList />
    );

    return (
        <div className="companies">
            <Main role="main">
                <Meta {...meta} />
                <Hero>
                    <h1><span>{heading1}</span><br />{heading1b}</h1>
                </Hero>
                {renderCompanyList()}
                <ContactUs>
                    <ButtonLink to="/contact" isMobile={store.isMobile}>Contact Us</ButtonLink>
                </ContactUs>
            </Main>
        </div>
    );
}
