import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Separator, Text, Row, MobileWrapper } from '../components/common';
import COLORS from '../constants/colors';
import { SERVICES } from '../constants';

const Wrapper = styled.div`
  padding: 24px 48px 48px;

  @media (max-width: 767px) {
    padding: 24px 24px 64px;
  }

  .content {
    display: none;
  }
`;

const Box = styled(Row)`
  flex: 1 0 calc(25% - 80px);
  height: 240px;
  max-width: 252px;
  margin: 20px 40px 40px;
  background-color: rgb(87, 154, 97, 0.1);
  border-right: 4px solid rgb(87, 154, 97, 0.5);
  border-bottom: 4px solid rgb(87, 154, 97, 0.5);
  padding: 10px;
  cursor: context-menu;

  @media (max-width: 767px) {
    flex: 1 0 calc(100% - 80px);
  }

  &:hover .content {
    display: block;
  }
`;

const Img = styled.img`
  width: inherit;
`;

const Content = styled.div`
  position: relative;
  top: 0;
  left: -226px;
  background: rgb(0, 0, 0, 0.8);
  height: 180px;
  padding: 4px 8px;
  overflow-y: auto;

  @media (max-width: 767px) {
    left: -222px;
  }
`;

const ContentText = styled(Text)`
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: white;
  font-weight: 600;
`;

const TextWrapper = styled(Row)`
  justify-content: center;
  background-color: rgb(87, 154, 97, 0.1);
  border-right: 4px solid rgb(87, 154, 97, 0.5);
  border-bottom: 4px solid rgb(87, 154, 97, 0.5);
  border-radius: 16px;
  padding: 12px 20px;
  width: 244px;

  @media (max-width: 768px) {
    margin-bottom: ${({ margin }) => (margin ? '32px' : '0')};
  }
`;

const HeadText = styled(Text)`
  line-height: 24px !important;
`;

const Services = props => {
  const { location: { pathname } = {} } = props;

  return (
    <Layout location={pathname}>
      <SEO
        title="Professional organizers home office services and free consultation"
        description="Move in home services, Home Moving, packing unpacking services, Home organization, office organization, kitchen organization, playroom, books organization, paper organization"
      />
      <Wrapper>
        <h1>
          <Text color={COLORS.THEME} size="x-large" weight="700" align="center">
            Services we offer
          </Text>
        </h1>
        <Separator height={16} />
        <Text align="center">
          In general, we come to your place and implement the organized systems, but in
          case of any hurdles and/or on your request, we offer virtual organizing services
          too!
        </Text>
        <Separator height={48} mobileHeight={24} />
        <Row justifyContent="center">
          <TextWrapper>
            <Text>
              <strong>FREE</strong> Initial Consultation
            </Text>
          </TextWrapper>
        </Row>
        <Separator height={32} />
        <Row justifyContent="space-evenly" gutter={80} mobileGutter={20}>
          <TextWrapper margin>
            <Text>
              <strong>Virtual</strong> Organizing Services
            </Text>
          </TextWrapper>
          <TextWrapper margin>
            <Text>
              <strong>Onsite</strong> Organizing Services
            </Text>
          </TextWrapper>
          <TextWrapper>
            <Text>
              <strong>Rush</strong> Services
            </Text>
          </TextWrapper>
        </Row>
        <Separator height={32} />
        <Row justifyContent="center">
          <TextWrapper>
            <Text>
              <strong>Move-in</strong> Services
            </Text>
          </TextWrapper>
        </Row>
        <Separator height={64} />
        <h2>
          <HeadText color={COLORS.THEME} size="x-large" weight="700" align="center">
            Space Consultations
          </HeadText>
        </h2>
        <Separator height={16} />
        <Text align="center">
          We offer the following space consultations, but these are not limited. Contact
          us and get custom plans too :))
        </Text>
        <MobileWrapper>
          <Separator height={8} />
          <Text align="center">Click on the service to know more!</Text>
        </MobileWrapper>
        <Separator height={32} mobileHeight={16} />
        <Row justifyContent="center">
          {SERVICES.map(service => (
            <Box key={service.name} direction="column" justifyContent="space-between">
              <Row width="100%" direction="column" justifyContent="space-between">
                <Img
                  src={service.image}
                  height={180}
                  alt={`${service.name} Organizing`}
                />
                <Text weight="600" size="medium" align="center" width="180px">
                  {service.name}
                </Text>
              </Row>
              <Content className="content">
                <ContentText>
                  {service.description}{' '}
                  {service.pc && (
                    <span>
                      {'Picture Courtesy - '}
                      <a style={{ color: COLORS.WHITE }} href={service.pcLink}>
                        {service.pc}
                      </a>{' '}
                    </span>
                  )}
                </ContentText>
              </Content>
            </Box>
          ))}
        </Row>
        <Text align="center" size="xx-small">
          *Some images used above are taken from pinterest. We do not indulge in copywrite
          infringement, hence we request you to kindly mail us at
          organicespaceswitherum@gmail.com in case you want us to remove any image used on
          this page.*
        </Text>
      </Wrapper>
    </Layout>
  );
};

export default Services;
