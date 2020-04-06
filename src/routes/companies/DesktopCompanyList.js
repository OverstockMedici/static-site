import React from 'react';
import { content } from '../../content/companies.content';
import { CompanyListDesktop } from './companies.style';
import List from './List';

const { companies } = content;

export default function DesktopCompanyList() {
    const buildCompanyList = () => (
        companies.map(({link, name, image, color, description}) => (
            <List key={name} {...{ link, name, image, color, description }} />
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
