import styled from 'styled-components';

export const HeroImg = styled.picture`
    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        width: 100vw;
    }
`;

export const H2 = styled.h2`
    font-size: 26px;
    font-weight: 500;
    line-height:1.1;
    letter-spacing: .4px;
    margin: 0 0 5px 0;
    text-align: center;

    @media(min-width: 640px){
        text-align:left;
    }
`;

export const Inquiries = styled.section`
    text-align: center;

    .inquery-info {
        margin: 40px 0 25px 0;
    }


    p {
        color: #0b1500;
        font-size: 20px;
        font-weight: 200;
        line-height: normal;
        letter-spacing: .3px;
        margin: 0;
    }

    @media(min-width: 640px){
        text-align: left;

        .inquiries-data{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 60px;

            .inquery-info {
                margin: 0 0 25px 0;
                width: 215px;
            }
        }
    }

    @media(min-width: 840px) {
        display: flex;
        justify-content: space-between;
        text-align: left;
        margin-bottom: 50px;

        h2 {
            text-align: left;
        }

        & > div {
            width: 50%;
            align-self: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .inquiries-data{
            padding: 1rem 60px;
            align-items: center;
        }

        .inquery-info {
            margin: 25px 0 25px 0;
            width: 215px;
        }

        picture {
            align-self: start;
            margin: initial;
            width: 50%;
        }
    }
`;

export const MapImg = styled.picture`
    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        width: 100vw;
    }
`;

export const ContactH2 = styled(H2)`
    margin-top: 25px;
    text-align:center;

    @media(min-width: 640px){
        text-align:center;
    }
`;

export const ContactForm = styled.form`
    padding: 35px;
    margin: 0 auto;
    margin-bottom: 25px;

    .loading-icon {
        display: block;
        margin: 0 auto;
    }

    .phone-number {
        display: none;
    }

    fieldset {
        margin: 0;
        padding: 0;
        border: none;

        input {
            margin-bottom: 6px;
        }
        
        label.sub-label {
            color: #525252;
            font-size: 12px;
            margin-bottom: 25px;
        }
    }
    legend, label {
        display: block;
        font-size: 17px;
        margin-bottom: 6px;
    }
    input, textarea {
        border: solid 1px #dce0d4;
        background: #fafafa;
        color: #000;
        font-size: 16px;
        display: inline-block;
        margin-bottom: 25px;
        padding: 12px;
        width: 100%;
    }
    textarea {
        height: 100px;
    }

    @media(min-width:640px) {
        label.sub-label {
            display: inline-block;
            width: calc(50% - 5px);

            &:first-of-type {
                margin-right: 10px;
            }
        }

        padding: 35px 100px;
        max-width: 970px
    }
`;

export const ServerMsg = styled.div`
    text-align: center;
    font-size: 36px;
    margin: 25px 0 50px;
`;

export const Button = styled.button`
    background-color: white;
    border: 2px solid;
    color: black;
    cursor: pointer;
    display: block;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: .3px;
    margin: 0 auto;
    margin-top: 15px;
    min-width: 250px;
    padding: 28px 52px;
    text-decoration: none;
    transition: .25s ease;

    &:hover {
        color: black;
        background-color: #dce0d4;
    }
`;
