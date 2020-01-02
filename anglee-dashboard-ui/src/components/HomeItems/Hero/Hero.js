import React from "react";
import {Carousel} from "antd";
import lifeOfPiImage from "assets/img/lifeOfPi-min.jpg";
import billyLynnImage from "assets/img/moviePoster/billylynn.jpg";
import tigerImage from "assets/img/moviePoster/life_of_pi.jpg";
import styled from "styled-components";

const CoverImg = styled.div`
  position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
`;

const HeroDiv = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #fff;
`;

const HeroContentArea = styled.div`
  opacity: 0;
  margin-top: 100px;
  animation: 1s slidefade 1s forwards;
`;

const HeroH1 = styled.h1`
  font: bold 60px "Open Sans", sans-serif;
  margin-bottom: 15px;
  opacity: 0.9;
  color: #fff;
`;

const HeroH3 = styled.h3`
  font: normal 28px "Open Sans", sans-serif;
  margin-bottom: 40px;
  opacity: 0.9;
  color: #fff;
`;

const HeroText = (
    < HeroContentArea >
    < HeroH1 > Welcome
to
Ang
Lee
Dashboard < /HeroH1>
< HeroH3 > For
our
lovely
Ang
Lee
movie
fans < /HeroH3>
< /HeroContentArea>
)
;

const Hero = () => {
    return (
        < Carousel
    effect = "fade" >
        < HeroDiv >
        < CoverImg
    url = {tigerImage}
    />
    {
        HeroText
    }
<
    /HeroDiv>
    < HeroDiv >
    < CoverImg
    url = {billyLynnImage}
    />
    {
        HeroText
    }
<
    /HeroDiv>
    < HeroDiv >
    < CoverImg
    url = {lifeOfPiImage}
    />
    {
        HeroText
    }
<
    /HeroDiv>
    < /Carousel>
)
    ;
};

export default Hero;
