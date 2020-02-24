import React from 'react';

export default function HamburgerIcon({height = '24px', width = '18px', stroke = 'black'}) {
    return (
        <svg viewBox="0 0 24 18" height={height} width={width}>
            <line fill="none" stroke={stroke} strokeMiterlimit="10" x1="0" y1="2" x2="24" y2="2"/>
            <line fill="none" stroke={stroke} strokeMiterlimit="10" x1="0" y1="9" x2="24" y2="9"/>
            <line fill="none" stroke={stroke} strokeMiterlimit="10" x1="0" y1="16" x2="24" y2="16"/>
        </svg>
    );
};