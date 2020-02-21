import styled from 'styled-components';
import { colors } from '../../style/colors';

const newsBannerSm = '/img/news-banner-600.jpg';
const newsBannerMed = '/img/news-banner-900.jpg';
const newsBannerLg = '/img/news-banner-1200.jpg';
const newsBannerXL = '/img/news-banner-1600.jpg';


export const Hero = styled.section`
    background: center center no-repeat url("${newsBannerSm}");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    max-height: 400px;
    min-height: 145px;


    h1 {
        color: white;
        font-size: 48px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        text-shadow: #000 0 0 50px;
        text-transform: uppercase;
    }

    @media (min-width: 601px) {
        background-image: url(${newsBannerMed});
    }
    @media (min-width: 901px) {
        background-image: url(${newsBannerLg});
    }
    @media (min-width: 1201px) {
        background-image: url(${newsBannerXL});
    }
`;

export const Articles = styled.section`
    margin: 0 auto;
    max-width: 1440px;

    @media(min-width: 677px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Article = styled.article`
    padding: 50px;

    &:nth-child(even) {
        background-color: #f3f4f1;
    }

    img {
        width: 100%;
    }

    .article-heading {
        color: black;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }

        h2 {
            font-size: 20px;
            margin: 15px 0;
            text-transform: uppercase;
        }
    }

    p {
        font-size: 18px;
        font-weight:300;

        a {
            color: ${colors.green_2};
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    
    .read-more-link {
        color: black;
        font-weight: 600;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
    
    time {
        display: block;
        font-size: 13px;
        opacity: .7;
        margin-top: 15px;
    }

    @media(min-width: 677px) {
        width: 50%;

        &:nth-child(even) {
            background-color: white;
        }

        &:nth-child(4n + 4), &:nth-child(4n + 1) {
            background-color: #f3f4f1;
        }
    }

    @media(min-width: 980px) {
        width: 33.33%;

        &:nth-child(4n + 4), &:nth-child(4n + 1) {
            background-color: white;
        }

        &:nth-child(even) {
            background-color: #f3f4f1;
        }
    }
`;
