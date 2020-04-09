import React from 'react';
import { content } from '../../content/companies.content';
import { CompanyListDesktop } from './companies.style';
import ListItem from './ListItem';

const { companies } = content;

export default function DesktopCompanyList() {
    const buildCompanyList = () => (
        companies.map(({link, name, image, color, description}) => (
            <ListItem key={name} {...{ link, name, image, color, description }} />
        ))
    );

    return (
        <CompanyListDesktop>
            <div className="hover-instructions">Hover over company logos for details</div>
            <div className="companies-wrapper">
                {buildCompanyList()}
            </div>
        </CompanyListDesktop>
    );
}
