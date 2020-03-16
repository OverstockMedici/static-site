import styled from 'styled-components';

const viewHeight = 'calc(100vh - 50px)';
export const Hero = styled.div`
    background-image: linear-gradient(45deg, rgb(220, 223, 211) 0%, rgb(83, 97, 66) 100%);
    height: ${viewHeight};
    max-height: 630px;

    #particles-foreground, #particles-background {
        position: absolute !important;
        top: 0;
        left: 0;
        height: ${viewHeight};
        max-height: 630px;
        width: 100%;
        z-index: 1;

    }
    @media (min-width: 640px) {
        max-height: 571px;
        #particles-foreground, #particles-background {
            max-height: 571px;
        }
    }
`;

export const HeroContent = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 30px;
    position: relative;
    z-index: 3;
`;

export const Blockquote = styled.blockquote`
    font-size: 26px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -.2px;
    text-align: center;
    color: #fff;
    width: 60%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (min-width: 640px) {
        font-size: 36px;
    }
`;

export const Cite = styled.cite`
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
    letter-spacing: -.2px;
    margin: 8px 0 50px 0;
    text-align: center;
    color: #fff;
    display: block;
    width: 100%;

    @media(min-width: 640px) {
        font-size: 25px;
    }
`;

export const TeamList = styled.section`
    color: white;
    letter-spacing: .3px;
    line-height: 1.1;
    background: #dce0d4;
    
    figure {
        margin: 0;
        position: relative;
    }
    img {
        max-width: 100%;
        display: block;
    }
    figcaption {
        position: absolute;
        padding: 1rem;
        bottom: -5px;
        text-shadow: #000 0 0 5px;
    }

    .employee-name {
        font-size: 2rem;
        margin-bottom: 5px;
    }

    .employee-title, .employee-info {
        font-size: 1.2rem;
        font-weight: 200;
    }

    @media(min-width: 640px) {
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        figure {
            width: 50%;
        }

        img { 
            width: 100%;
            height: auto;
        }

        .employee-name {
            font-size: 1rem;
        }

        .employee-title, .employee-info {
            font-size: 0.8rem;
        }
    }

    @media(min-width: 900px) {
        figure {
            width: 33.33%;

            figcaption  {
                padding: 1rem 0.5rem;
            }
        }

        .employee-name {
            font-size: 1.2rem;
        }

        .employee-title, .employee-info {
            font-size: 0.8rem;
        }
    }

    @media(min-width: 1180px) {
        figure {
            figcaption  {
                padding: 1rem;
            }
        }

        .employee-name {
            font-size: 1.5rem;
        }

        .employee-title, .employee-info {
            font-size: 1rem;
        }
    }

    @media(min-width: 1440px) {
        figure {
            width: 20%;
        }

        .employee-name {
            font-size: 1.5rem;
        }

        .employee-title, .employee-info {
            font-size: 1rem;
        }
    }
`;

export const JobListings = styled.section`
    background-color: #F2F3EF;
    margin: 0 auto;
    
    h2 {
        font-size: 36px;
        font-weight: 500;
        line-height: 1.1;
        letter-spacing: .5px;
        margin: 0;
        padding: 20px 0;
        text-align: center;
    }
    
    .join-our-team {
        padding: 40px 20px;
        p {
            color: #525252;
            font-size: 16px;
            text-align: center;
        }
    
        a {
            color: #525252;
            display: block;
            text-align: center;
        }
    }

    .listings {
        padding: 40px;
        border-bottom: solid 1px #979797;
        max-width: 1140px;
        margin: 0 auto;
    }

    .job-listing {
        border-top: solid 1px #979797;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0;

        a {
            color: #000;
            text-decoration: none;
            
            &:hover {
                text-decoration: underline;
            }
            h3 {
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0.3px;
            line-height: normal;
            }
        }

        @media(min-width: 830px) {
            h3 {
                line-height: 1.2em;
                margin-right: 15px;
            }
        }
            
    }
    .job-description {
        align-items: center;
        display: flex;
        justify-content: space-between;
        
        p {
            font-size: 16px;
            font-weight: 200;
            line-height: 1.4em;
            width: calc(100% - 50px);
        }
    }

`;

export const StyledArrow = styled.img`
    width: 31px;
    height: 50px;
`;
