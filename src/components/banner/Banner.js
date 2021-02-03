import React from 'react'
import styled from 'styled-components'
import { colors } from '../../style/colors'
import { SiteHeader } from '../header/header.style'
import InfoIcon from '../icons/InfoIcon'

const StyledBanner = styled(SiteHeader)`
  padding: 30px;
  height: auto;
  color: #ffffff;
  background-color: ${colors.green_1};
  font-size:1.1rem;
  max-width: 100%;

  .icon-wrapper {
    padding-right: 20px;
    height: 24px;
  }
  
  .banner-text {
    margin: 0;
    a{
      color: ${colors.nearly_black};
      line-height:1.4;
      color: #ffffff;
    }
  }

  @media (min-width: 641px) {
        justify-content: center;
        height: auto;
    }

  @media (min-width: 1400px) {
    padding: 40px;
    font-size:1.3rem;
  }
`

const Banner = ({text, link}) => {
  return (
    <StyledBanner>
        <div className="icon-wrapper">
          <InfoIcon/>
        </div>
        <p className="banner-text">
          <a href={link}>{text}</a>
        </p>
    </StyledBanner>
  )
}

export default Banner
