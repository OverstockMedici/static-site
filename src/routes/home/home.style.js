import styled from 'styled-components';
import { colors } from '../../style/colors';

const heroImgSm = 'img/home-landing-small.jpg';
const heroImgMd = 'img/home-landing-medium.jpg';
const heroImgLg = 'img/home-landing-large.jpg';
const arrowDown = 'img/arrow-down.png';
const homeBlocks2 = 'img/home-blocks-2.png';
const homeBlocks3 = 'img/home-blocks-3.png';

export const Main = styled.main`
    background: url(${homeBlocks2}) bottom right no-repeat, url(${homeBlocks3}) bottom left no-repeat;
    background-size: 237px 209px, 94px 94px;
    padding-bottom: 50px;
`;

export const Hero = styled.section`
    background: no-repeat 0 0 url(${heroImgSm});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vw;
    max-height: 100vh;
    position:relative;

    img {
        width: 703px;
        height: 315px;
        max-width: 50%;
    }

    @media (min-width: 650px) {
        background-image: url(${heroImgMd});
    }

    @media (min-width: 870px) {
        background-image: url(${heroImgLg});
        img {
            max-width: 90%;
        }
    }

    @media (min-width: 1200px) {
        height: 90vh;
    }
`;

export const DownButton = styled.button`
    background: no-repeat 0 0 url(${arrowDown});
    background-size: contain;
    border: none;
    cursor: pointer;
    height: 15px;
    width: 25px;
    position: absolute;
    bottom: 35px;

    &:focus {
        outline: none;
    }

    @media (min-width: 650px) {
        bottom: 45px;
        height: 31px;
        width: 50px;
    }
`;

export const Overview = styled.section`
    div {
        padding: 30px;
        h2 {
            font-size: 30px;
            font-weight: 500;
            margin-top: 0;
        }
        p {
            font-size: 18px;
        }
    }
    .overview-1 {
        background-color: ${colors.grey_3};
    }
    .overview-2 {
        background-color: ${colors.green_2};
        color: ${colors.white};
    }.overview-3 {
        background-color: ${colors.grey_5};
    }

    @media (min-width: 650px) {        
        [class*='overview-'] {
            transform: translateY(100%);
            transition: all 1s;
            z-index:-100;
        }

        .overview-2 {
            transition-delay: 0.1s
        }

        .overview-3 {
            transition-delay: 0.2s
        }

        &.animated [class*='overview-'] {
            transform: translateY(0%);
        }

        div {
            h2 {
                font-size: 36px;
            }
            p {
                font-size: 24px;
            }
        }
    }

    @media (min-width: 1200px) {
        display: flex;

        .overview-1 {
            padding-left:8%;
        }

        .overview-3 {
            padding-right:8%;
        }
        div {
            width: 100%;
        }
    }
`;
// TODO: animate in overview paragraphs

export const Industries = styled.section`
    background-color: #0c1501;
    background-image: -webkit-radial-gradient(50% 67%, ellipse, #526041, #1b260c 54%, #0c1501);
    background-image: -o-radial-gradient(50% 67%, ellipse, #526041, #1b260c 54%, #0c1501);
    background-image: radial-gradient(ellipse at 50% 67%, #526041, #1b260c 54%, #0c1501);
    color: ${colors.white};
    padding: 30px 30px 0 30px;
    z-index:150;

    h2 {
        font-size: 36px;
        font-weight: 500;
        text-align: center;
        margin: 4.5rem 0;
    }

    .industries-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        overflow: hidden;

        img {
            max-width: 110px;
            text-align: center;
            align-self: center;
            margin-bottom: 75px;
        }
    }

    @media (min-width: 650px) {
        .industries-container {
            img {
                max-width: 130px;
            }
        }
    }


    @media (min-width: 870px) {
        h2 {
            margin: 3.5rem 0;
        }

        .industries-container {
            grid-template-columns: repeat(6, 1fr);

            img {
                max-width: 105px;
                transform:translateX(100vw);
                transition: all 0.7s 0.2s ease-out;
            }

            img:nth-of-type(2) {
                transition-delay: 0.3s;
            }
            img:nth-of-type(3) {
                transition-delay: 0.4s;
            }
            img:nth-of-type(4) {
                transition-delay: 0.5s;
            }
            img:nth-of-type(5) {
                transition-delay: 0.6s;
            }
            img:nth-of-type(6) {
                transition-delay: 0.7s;
            }            
        }

        .industries-container.animated {
            img {
                transform:translateX(0)
            }
        }
    }

    @media (min-width:1200px) {
        h2 {
            margin:1.5em;
        }

        .industries-container {
            max-width: 1140px;
            margin: 0 auto 50px;
        }
    }
`;
// TODO: animate in Industries

export const WhoIs = styled.section`
    margin: 0 auto;
    max-width: 1400px;
    img {
        max-width: 100%;
    }

    .who-is-2 img {
        margin-bottom: 15px;
    }

    h2 {
        font-size: 36px;
        font-weight: 500;
        padding: 0 30px;
        margin-top: 60px;
    }

    p {
        color: ${colors.nearly_black};
        font-size: 20px;
        font-weight: 100;
        margin-top: 0;
        padding: 0 30px;
    }

    @media (min-width: 870px) {
        & > div {
            display: flex;
            margin-bottom: 25px;
        }
        .who-is-2 {
            flex-direction: row-reverse
        }
        img {
            max-width: 40vw;
            margin-right: auto;
            padding: 0 30px 30px 0;
        }

        .who-is-2 img {
            margin-left: auto;
            padding: 0 0 30px 30px;
        }
    }
`;

export const LearnMore = styled.section`
    display: flex;
    justify-content: center;
    padding: 30px 0;
`;
