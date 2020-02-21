import styled from 'styled-components';
import { Link } from 'components/Router'
import { colors } from '../../style/colors';

export const HeaderWrapper = styled.header`
    background-color: ${colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 200;
`;

export const SiteHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px 60px;
    width: 100%;
    height: 50px;

    @media (min-width: 641px) {
        justify-content: space-between;        
        height: 63px;
    }

    @media (min-width: 1400px) {
        padding: 15px 20px;
    }
`;

export const Open = styled.button`
    background: none;
    border: none;
    position: absolute;
    left: 10px;
    top: 14px;
    &:focus {
        outline: none;
    }
`;

export const LogoImg = styled.img`
    max-width: 80px;
    @media (min-width: 641px) {
        max-width: 120px;        
    }
`;

export const Nav = styled.nav`
    &.desktop-nav {
        :hover a {
            color: ${colors.grey_2};
        }
        a:hover {
            color: ${colors.grey_1};
        }
        display: none;
    }

    @media (min-width: 641px) {
        &.desktop-nav {
            display: block;
        }
    }

    &.mobile-nav {
        background-color: ${colors.white};
        display: flex;
        flex-direction: column;
        height: 100%;
        left: -100%;
        padding: 2em 0 2em 0;
        position: fixed;
        top: 0;
        transition: transform 170ms ease-in-out;
        width: 100%;
        z-index: 100;
        a {
            font-size: 2em;
            font-weight: 300;
            padding: 0 1em .618em 1em;
        }

        &.open {
            transform: translateX(100%);
        }
    }
`;

export const StyledLink = styled(Link)`
    color: ${colors.nearly_black};
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    padding: .618em;
    text-decoration: none;
    transition: color 170ms ease-in-out;
`;

export const Close = styled.button`
    color: ${colors.grey_1};
    background-color: ${colors.grey_3};
    border: none;
    padding: 1.5em;
    position: absolute;
    right: 0;
    top: 0;
    &:focus {
        outline: none;
    }
`;
