import React from 'react';

export default function CloseIcon({height = '15px', width = '15px', stroke = 'black'}) {
    return (
        <svg viewBox="0 0 16 16" height={height} width={width}>
            <line fill="none" stroke={stroke} strokeMiterlimit="10" x1="1.4" y1="1.4" x2="14.4" y2="14.4"/>
            <line fill="none" stroke={stroke} strokeMiterlimit="10" x1="1.4" y1="14.4" x2="14.4" y2="1.4"/>
        </svg>
    );
};