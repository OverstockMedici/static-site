import styled from 'styled-components';
import { colors } from '../../style/colors';

const footerBlocks = '/img/footer-blocks-green.png';

export const MainFooter = styled.footer`
    background: ${colors.green_1} url(${footerBlocks}) center right no-repeat;
    background-size: cover;
    color: ${colors.white};
    flex-direction: column;
    padding: 65px 0;
    display: flex;
    justify-content: center;

    .footer-logo-link {
        text-align: center;
    }

    a {
        color: ${colors.grey_4};
    }

    @media (min-width: 1000px) {
        align-items: center;
        background-size: contain;
        flex-direction: row;
        justify-content: left;
        padding: 30px 0;
    }
`;

export const FooterLogo = styled.img`
    max-height: 34px;
    align-self: center;

    @media (min-width: 1000px) {
        margin: 0 50px;
        max-height: 23px;
    }
    @media (min-width: 1201px) {
        max-height: 30px;
    }
`;

export const FooterNav = styled.nav`
    font-size: 12px;
    padding: 25px 0;
    display: flex;
    justify-content: center;

    a {
        margin: 10px;
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }

    @media (min-width: 451px) {
        a {
            display: inline-block;
            position: relative;
            margin: 20px;

            &:after {
                content: "";
                background-color: ${colors.grey_4};
                display: block;
                height: 36px;
                position: absolute;
                top: -10px;
                right: -20px;;
                width: 1px;
            }

            &:last-child:after {
                background: none;
            }
        }
    }
`;

export const Copyright = styled.div`
    font-size: 16px;
    margin: 0 50px;
    text-align: center;

    @media (min-width: 1000px) {
        margin-left: auto;
    }
`;