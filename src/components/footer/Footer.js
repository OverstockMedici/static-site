import React from 'react';
import { Link } from 'components/Router';
import { MainFooter, FooterLogo, FooterNav, Copyright } from './footer.style';
import { nav } from '../../content/nav.content';

const reversedLogo = '/img/medici-logo-reversed.png';

export default function Footer() {
    const buildFooterLinks = nav.map(item => (
        <a href={item.link} key={item.link}>
            {item.name}
        </a>
    ));
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <MainFooter>
            <Link to="/" className="footer-logo-link">
                <FooterLogo src={reversedLogo} alt="Medici Ventures Logo" />
            </Link>
            <FooterNav>{buildFooterLinks}</FooterNav>
            <Copyright>Copyright &copy; Medici Ventures Inc. 2020</Copyright>
        </MainFooter>
    );
}
