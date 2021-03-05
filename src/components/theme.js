import React from 'react';
import styled from 'styled-components';

import { Row, Text, Col, DesktopWrapper, MobileWrapper } from './common';
import Logo from '../images/logo.png';
import './layout.css';
import COLORS from '../constants/colors';
import { Link } from 'gatsby';

const Wrapper = styled(Row)`
  margin-top: 44px;
  padding: 10px 8px;

  @media (max-width: 767px) {
    margin-top: 50px;
    padding: 5px 8px;
    align-items: center;
  }
`;

const H2Text = styled(Text)`
  padding: 2px 2px;

  @media (max-width: 767px) {
    padding: 0 1px;
    line-height: 8px;
  }
`;

const TextRow = styled(Row)`
  margin-top: -8px;
`;

const Theme = () => {
  return (
    <>
      <Wrapper>
        <DesktopWrapper>
          <Link to="/">
            <img src={Logo} alt="Logo" height={80} width={80} />
          </Link>
        </DesktopWrapper>
        <MobileWrapper>
          <Link to="/">
            <img src={Logo} alt="Logo" height={40} width={40} />
          </Link>
        </MobileWrapper>
        <Col mobileGutter={2} />
        <TextRow direction="column" alignItems="end">
          <Row alignItems="baseline">
            <Text color={COLORS.THEME} weight="bolder" size="24px" mobileSize="14px">
              OrgaNice Spaces{' '}
            </Text>
            <Col gutter={2} />
            <Text color={COLORS.THEME} weight="400" size="18px" mobileSize="10px">
              with Erum
            </Text>
          </Row>
          <H2Text color={COLORS.THEME} size="12px" mobileSize="8px">
            Give your spaces a modern makeover!
          </H2Text>
        </TextRow>
      </Wrapper>
    </>
  );
};

export default Theme;
