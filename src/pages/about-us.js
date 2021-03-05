import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import COLORS from '../constants/colors';
import {
  Separator,
  Text,
  Row,
  MobileWrapper,
  DesktopWrapper,
} from '../components/common';
import WomenWardrobe from '../images/womenWardrobe.jpg';
import MenWardrobe from '../images/menWardrobe.jpg';
import OurFormula from '../images/ourFormula.png';

const AboutWrapper = styled(Row)`
  width: 100%;
`;

const About = props => {
  const { location: { pathname } = {} } = props;

  return (
    <Layout location={pathname}>
      <SEO
        title="About First Professional Organizer in Udaipur India"
        description="Who is a professional organizer, What does an organiser do, decluttering methodology"
      />
      <AboutWrapper direction="column">
        <h1>
          <Text
            size="x-large"
            weight="bolder"
            color={COLORS.THEME}
            align="center"
            padding="12"
          >
            Who we are
          </Text>
        </h1>
        <Separator height={24} mobileHeight={16} />
        <Row
          mobileGutter={30}
          justifyContent="space-evenly"
          mobileDirection="column"
          width="100%"
        >
          <MobileWrapper>
            <img
              src={WomenWardrobe}
              alt="Who we are as professional organizers"
              width={300}
              height={200}
            />
          </MobileWrapper>
          <Text width="50%" mobileWidth="100%" align="center">
            Erum Sanwari, founder of OrgaNice Spaces with Erum, is the First Certified
            Professional organizer in Udaipur. She has been an organizing geek all her
            life, but did not realize how her ability to create useful organizing systems
            could be a help to other people, until this year, 2020! When she learnt about
            the fact that someone like her could jump into a profession called
            professional organizers, she was all set to take this step. Today, she is a
            trained, certified professional organizer who can get all your organizing
            worries turned into beautiful, functional spaces. After taking her services,
            you would never have to worry about having to pile up your clothes on a chair
            because your wardrobe is overflowing, or cluttering your kitchen counter with
            countless things because you have no storage space for them anywhere else!
          </Text>
          <DesktopWrapper>
            <img
              src={WomenWardrobe}
              alt="Who we are as professional organizers"
              width={400}
              height={300}
            />
          </DesktopWrapper>
        </Row>
        <Separator height={40} mobileHeight={24} />
        <Separator height={2} width="92%" background={COLORS.THEME} />
        <Separator height={40} mobileHeight={24} />
        <h2>
          <Text
            size="x-large"
            weight="bolder"
            color={COLORS.THEME}
            align="center"
            padding="12"
          >
            What we do?
          </Text>
        </h2>
        <Separator height={24} mobileHeight={16} />
        <Row
          mobileGutter={30}
          justifyContent="space-evenly"
          mobileDirection="column"
          width="100%"
        >
          <MobileWrapper>
            <img
              src={MenWardrobe}
              alt="What we do as professional organizers"
              width={300}
              height={300}
            />
          </MobileWrapper>
          <DesktopWrapper>
            <img
              src={MenWardrobe}
              alt="What we do as professional organizers"
              width={400}
              height={300}
            />
          </DesktopWrapper>
          <Text width="50%" mobileWidth="100%" align="center">
            We come to your homes, offices or any site to be organized, declutter the
            space, help you purge among items, plan the organizing strategy and implement
            it in the spaces. We take pleasure in providing fully functional systems in
            your homes etc., and hence we do not close on clients after organizing is
            done. We help you with how to maintain the systems created, and constantly be
            in touch with you in case you need more help from us, so you know you can
            always count on us:). We respect your privacy and design the best solutions
            for you.
          </Text>
        </Row>
        <Separator height={40} mobileHeight={24} />
        <Separator height={2} width="92%" background={COLORS.THEME} />
        <Separator height={40} mobileHeight={24} />
        <h3>
          <Text
            size="x-large"
            weight="bolder"
            color={COLORS.THEME}
            align="center"
            padding="12"
          >
            Our Formula
          </Text>
        </h3>
        <Separator height={24} mobileHeight={16} />
        <Row
          mobileGutter={30}
          justifyContent="space-evenly"
          mobileDirection="column"
          width="100%"
        >
          <MobileWrapper>
            <img src={OurFormula} alt="Our Methodology" width={200} height={300} />
          </MobileWrapper>
          <Text width="50%" mobileWidth="100%" align="center">
            We have formulated a simple 4-step solution for any organizing spree. We call
            it the PoDCOr strategy, which expands to PullOut -{`>`} Declutter -{`>`}{' '}
            Categorise -{`>`} Organize! This approach helps in organizing any kind of
            spaces. organizing is no rocket science. Anyone can learn how to stay
            organized. But you do need to LEARN it. Not everyone has the time to do that.
            So we are here to help put our expertise into your lives and give you the best
            of it
          </Text>
          <DesktopWrapper>
            <img src={OurFormula} alt="Our Methodology" width={200} height={300} />
          </DesktopWrapper>
        </Row>
        <Separator height={96} />
      </AboutWrapper>
    </Layout>
  );
};

export default About;
