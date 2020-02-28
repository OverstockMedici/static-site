import React, { useState } from 'react';
import { CompanyList } from './companies.style';
import { content } from '../../content/companies.content';

const { companies } = content;

export default function MobileCompanyList() {
    const [state, setState] = useState({ openCompanyName: '' });
    const toggleDescriptionOpen = (companyName) => {
        const updatedName = companyName === state.openCompanyName ? '' : companyName;
        setState({ openCompanyName: updatedName });
    };
    const buildCompanyList = () => (
        companies.map(company => (
            <div
                key={company.name}
                className={state.openCompanyName === company.name ? 'open' : ''}
                onClick={() => toggleDescriptionOpen(company.name)}
            >
                <img src={company.image} alt={`${company.name} logo`} />
                <div className="company-description" style={{ backgroundColor: `${company.color}` }}>
                    {company.description} Visit <a href={company.link} target="_blank" rel="noopener noreferrer">{company.linkText}</a>
                </div>
            </div>
        ))
    );

    return (
        <CompanyList>
            {buildCompanyList()}
        </CompanyList>
    );
}
