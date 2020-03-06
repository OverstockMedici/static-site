import styled from 'styled-components';
import { Link } from 'components/Router'
import { colors } from '../style/colors';

export const ButtonLink = styled(Link)`
    background-color: white;
    border: 2px solid;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: .3px;
    margin: 0 auto;
    padding: 28px 52px;
    text-decoration: none;
    transition: .25s ease;

    ${props => !props.isMobile &&
        `&:hover {
            color: black;
            background-color: ${colors.off_white};
        }`
    }

`;

export const ButtonLinkReversed = styled(ButtonLink)`
    background-color: initial;
    border-color: white;
    color: white;

    ${props => !props.isMobile &&
        `&:hover {
            border-color: black;
        }`
    }

`;
