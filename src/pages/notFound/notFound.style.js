import styled from 'styled-components';
import { colors } from '../../style/colors';

const homeBlocks2 = 'img/home-blocks-2.png';
const homeBlocks3 = 'img/home-blocks-3.png';

/* eslint-disable import/prefer-default-export */
export const Main = styled.main`
    background: url(${homeBlocks2}) bottom right no-repeat, url(${homeBlocks3}) bottom left no-repeat;
    background-size: 237px 209px, 94px 94px;
    padding: 50px 30px;
    margin: 0 auto;
    max-width: 1240px;

    p {
        font-size: 20px;
        line-height: normal;
        letter-spacing: .3px;
        color: #0b1500;

        a {
            color: ${colors.green_2};
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    li {
        font-size: 16px;
        font-weight: 300;
        letter-spacing: .03em;
        line-height: 2em;
        text-transform: none;
        color: #525252;
    }
`;
