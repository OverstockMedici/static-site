import React from 'react';
import { content } from '../../content/companies.content';
import { CompanyListDesktop } from './companies.style';

const { companies } = content;

export default function DesktopCompanyList() {
    const buildCompanyList = () => (
        companies.map(company => (
            <a href={company.link} target="_blank" rel="noopener noreferrer" key={company.name}>
                <img src={company.image} alt={`${company.name} logo`} />
                <div className="company-description" style={{ borderColor: `${company.color}` }}>
                    {company.description}
                </div>
            </a>
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
