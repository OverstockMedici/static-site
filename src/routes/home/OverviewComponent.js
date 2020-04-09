import React, { Component } from 'react';

const OverviewComponent = ({ styleName, heading, content }) => (
    <div data-testid="overview" className={styleName}>
        <h2>{heading}</h2>
        <p>{content}</p>
    </div>
);

export default OverviewComponent;
