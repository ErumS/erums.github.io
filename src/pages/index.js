import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  Separator,
  Text,
  Row,
  DesktopWrapper,
  MobileWrapper,
} from '../components/common';
import COLORS from '../constants/colors';
import { HOME_SLIDER } from '../constants';

const HomeWrapper = styled.div`
  width: 100%;
`;

const SlideShow = styled.div`
  width: 100%;
  height: 400px;

  @media (max-width: 767px) {
    height: 300px;
  }
`;

const TextWrapper = styled(Row)`
  padding: 20px 100px 60px;

  @media (max-width: 767px) {
    padding: 16px 40px 60px;
  }
`;

const Img = styled.img`
  width: 90vw !important;
  height: 400px;
  border-bottom: 20px solid ${COLORS.WHITE};

  @media (max-width: 767px) {
    height: 300px;
    width: 98vw !important;
  }
`;

const ImgRow = styled(Row)`
  display: flex !important;
`;

const ZoomEffect = keyframes`
from {
  transform: scale(1, 1);
  font-color: ${COLORS.LIGHT_GRAY};
  opacity: 0.5;
  text-shadow: 2px 2px ${COLORS.GRAY};
}
to {
  transform: scale(3, 3);
  font-color: ${COLORS.GRAY};
  opacity: 0.8;
  text-shadow: 2px 2px 2px ${COLORS.LIGHT_GRAY};
}
`;

const ZoomEffectMobile = keyframes`
from {
  transform: scale(.5, .5);
  font-color: ${COLORS.LIGHT_GRAY};
  opacity: 0.5;
  text-shadow: 2px 2px ${COLORS.GRAY};
}
to {
  transform: scale(1.25, 1.25);
  font-color: ${COLORS.GRAY};
  opacity: 0.8;
  text-shadow: 2px 2px 2px ${COLORS.LIGHT_GRAY};
}
`;

const AnimeText = styled(Text)`
  font-size: small;
  font-weight: 600;
  position: relative;
  top: -212px;
  z-index: 1;
  animation-name: ${ZoomEffect};
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @media (max-width: 767px) {
    top: -170px;
    width: 80%;
    text-align: center;
    animation-name: ${ZoomEffectMobile};
  }
`;

const Anchor = styled.a`
  color: ${COLORS.THEME};
  padding: 4px 0;
`;

const HeadText = styled(Text)`
  text-align: center !important;
`;

const Index = props => {
  const { location: { pathname } = {} } = props;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'ease-in',
  };

  return (
    <Layout location={pathname}>
      <SEO
        title="Professional Organizer in India"
        description="Professional organizer, organiser, decluttering expert, why organize, Professional organizer in India, Udaipur, Rajasthan"
      />
      <HomeWrapper>
        <Separator height={24} />
        <SlideShow>
          <Slider {...settings}>
            {HOME_SLIDER.map((slide, index) => (
              <ImgRow key={index} justifyContent="center">
                <Row direction="column">
                  <DesktopWrapper>
                    <Img src={slide.image} alt="Home | Office Organizing" />
                  </DesktopWrapper>
                  <MobileWrapper>
                    <Img
                      src={slide.mobileImage || slide.image}
                      alt="Home | Office Organising"
                    />
                  </MobileWrapper>
                  <AnimeText>{slide.text}</AnimeText>
                </Row>
              </ImgRow>
            ))}
          </Slider>
        </SlideShow>
        <Separator height={56} />
        <TextWrapper justifyContent="center">
          <h1>
            <Text size="xx-large" weight="600" color={COLORS.WHITE} lineHeight={28}>
              Professional Organizer
            </Text>
          </h1>
          <Text
            align="center"
            size="large"
            color={COLORS.LIGHT_GRAY}
            lineHeight={28}
            style={{ marginTop: '-80px' }}
          >
            OrgaNice Spaces with Erum is the first professional organizing and clutter
            management company in Udaipur. As a professional organizing business, we help
            transform dead spaces in your homes, offices or businesses into the most
            functional ones. We work with the aim of clearing out the clutter in physical
            spaces and create systematic organized spaces, dedicating a home to each big
            or small item. We believe that every individual is unique, and has their own
            way of living. So, we design your spaces the way you’d feel most welcomed in!!
          </Text>
          <Separator height={48} />
          <h2>
            <HeadText size="xx-large" weight="bold" color={COLORS.THEME} lineHeight={28}>
              Why organize?
            </HeadText>
          </h2>
          <Separator height={24} />
          <Text align="center" size="large" color={COLORS.LIGHT_GRAY} lineHeight={28}>
            When you live in a cluttered space, the physical clutter grabs a good spot
            somewhere in the back of your mind. We never tend to realize it, but the
            cluttered pile traps negative energies within it, which in turn affects our
            state of mind, and ultimately our attitude and behavior. We tend to become
            more stressed and are never able to figure out the reason. Only when you clean
            any space you realize how calm and composed your mind feels looking at it. But
            it is very important to have organized systems in place, because without them
            a few days later, you would find another cluttered pile on your chair or
            dining table.
          </Text>
          <Separator height={24} mobileHeight={16} />
          <Row mobileDirection="column" justifyContent="space-evenly" width="100%">
            <Anchor href="/about-us/">More About Us</Anchor>
            <Anchor href="/gallery/">View some Pictures and Videos</Anchor>
            <Anchor href="/our-services/">See our Services</Anchor>
          </Row>
        </TextWrapper>
      </HomeWrapper>
    </Layout>
  );
};

export default Index;
