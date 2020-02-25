import React, { useContext } from 'react';
import Meta from '../../components/Meta';
import { Context } from '../../store';
import { ButtonLink } from '../../components/ButtonLink';
import MobileCompanyList from './MobileCompanyList';
import DesktopCompanyList from './DesktopCompanyList';
import { content, meta } from '../../content/companies.content';
import { Main, Hero, ContactUs } from './companies.style';

const { heading1, heading1b } = content;

export default function Companies() {
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
                    <ButtonLink to="/contact">Contact Us</ButtonLink>
                </ContactUs>
            </Main>
        </div>
    );
}
