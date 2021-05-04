import styled from 'styled-components';

const homeBlocks2 = '/img/home-blocks-2.png';
const homeBlocks3 = '/img/home-blocks-3.png';
const coliseumSm = '/img/companies-coliseum-entrance-360.jpg';
const coliseumMd = '/img/companies-coliseum-entrance-600.jpg';
const coliseumLg = '/img/companies-coliseum-entrance-950.jpg';
const coliseumXL = '/img/companies-coliseum-entrance-1200.jpg';
const coliseumXXL = '/img/companies-coliseum-entrance-1600.jpg';

export const Main = styled.main`
    background: url(${homeBlocks2}) bottom right no-repeat,
        url(${homeBlocks3}) bottom left no-repeat;
    padding-bottom: 50px;
`;

export const Hero = styled.section`
    background: no-repeat center bottom url(${coliseumSm});
    background-size: cover;
    color: white;
    letter-spacing: 0.5px;
    line-height: normal;
    margin: 0 auto;
    min-height: 430px;
    padding: 60px;

    h1 {
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        text-shadow: #1c2411 0px 0px 20px;

        span {
            font-weight: 600;
        }
    }

    @media (min-width: 500px) {
        background-image: url(${coliseumMd});
    }

    @media (min-width: 650px) {
        background-image: url(${coliseumLg});
        h1 {
            font-size: 30px;
        }
    }

    @media (min-width: 770px) {
        h1 {
            font-size: 36px;
        }
    }

    @media (min-width: 1000px) {
        background-image: url(${coliseumXL});
    }

    @media (min-width: 1300px) {
        background-image: url(${coliseumXXL});
        min-height: 530px;
    }
`;

export const CompanyList = styled.section`
    & div {
        border-bottom: solid 0.5px #b0b0b0;
        background-color: #f3f4f1;
    }
    img {
        display: block;
        padding: 32px 0;
        margin: 0 auto;
    }
    a {
        color: white;
    }
    .company-description {
        background: rgb(63, 62, 62);
        box-shadow: inset 0px 0px 15px 8px rgba(0, 0, 0, 0.15);
        color: #fff;
        line-height: 1.2em;
        max-height: 0;
        overflow: hidden;
        padding: 0 25px;
        position: relative;
        transition: all 0.4s ease-in-out;

        &:after {
            content: '';
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid #fff;
            position: absolute;
            top: 15px;
            left: calc(50% - 8px);
            transform: rotate(180deg);
            transition: transform 0.4s ease-in-out;
        }
    }
    .open {
        .company-description {
            padding: 35px 25px;
            max-height: 500px;

            &:after {
                transform: rotate(0deg);
            }
        }
    }
`;

export const CompanyListDesktop = styled.section`
    background-image: linear-gradient(to bottom, #eceee9, #ffffff);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
    position: relative;

    .hover-instructions {
        color: #525252;
        font-size: 16px;
        left: 0;
        position: absolute;
        text-align: center;
        top: 40px;
        width: 100%;
    }

    .companies-wrapper {
        max-width: 1120px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-top: 65px;
    }

    a {
        align-items: center;
        background-color: white;
        display: flex;
        height: 161px;
        justify-content: center;
        margin: 5px;
        position: relative;
        width: 270px;

        img {
            max-width: 100%;
        }
    }

    .company-description {
        align-items: center;
        background: rgba(0, 0, 0, 0.75);
        border: solid 5px rgb(63, 62, 62);
        color: white;
        display: flex;
        font-size: 12px;
        height: 100%;
        justify-content: center;
        left: -5px;
        margin: 5px;
        opacity: 0;
        padding: 0 15px;
        position: absolute;
        text-align: center;
        top: -5px;
        transform: translateZ(
            0
        ); /* to account for opacity transition bug that causes some images not to render */
        transition: opacity 0.25s ease-in-out;
        width: 100%;
    }

    a:hover {
        .company-description {
            /* display: flex; */
            opacity: 1;
        }
    }
`;

export const ContactUs = styled.section`
    display: flex;
    justify-content: center;
    padding: 30px 0;
`;
