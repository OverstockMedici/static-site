import React, { useState } from 'react';
import { CompanyList } from './companies.style';
import { content } from '../../content/companies.content';
import ListItemMobile from './ListItemMobile';

const { companies } = content;

export default function MobileCompanyList() {
    const [state, setState] = useState({ openCompanyName: '' });
    const toggleDescriptionOpen = (companyName) => {
        const updatedName =
            companyName === state.openCompanyName ? '' : companyName;
        setState({ openCompanyName: updatedName });
    };
    const buildCompanyList = () =>
        companies.map(({ link, name, image, color, description, linkText }) => (
            <ListItemMobile
                key={name}
                cardStyle={state.openCompanyName === name ? 'open' : ''}
                {...{
                    link,
                    name,
                    image,
                    color,
                    description,
                    linkText,
                    toggleDescriptionOpen,
                }}
            />
        ));

    return <CompanyList>{buildCompanyList()}</CompanyList>;
}
