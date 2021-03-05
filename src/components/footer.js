import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../constants/colors';
import { Row, Text, DesktopWrapper, MobileWrapper, Separator } from './common';
import Menu from './menu';

const Wrapper = styled.footer`
  background: ${COLORS.FOOTER};
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const HomeLink = styled(Link)`
  color: ${COLORS.THEME};
`;

const Footer = ({ location }) => {
  return (
    <Wrapper>
      <DesktopWrapper>
        <Row justifyContent="space-between" alignItems="center" gap={8} gutter={24}>
          <Text size="small" mobileSize="smaller" color={COLORS.GRAY}>
            2020 - {new Date().getFullYear()} -{' '}
            <HomeLink to="/">OrgaNice Spaces with Erum</HomeLink>
          </Text>
          <Menu footer location={location} />
        </Row>
      </DesktopWrapper>
      <MobileWrapper>
        <Row direction="column" justifyContent="center" gap={4}>
          <Menu footer location={location} />
          <Separator height={4} />
          <Text size="small" mobileSize="smaller" color={COLORS.GRAY}>
            {new Date().getFullYear()} -{' '}
            <HomeLink to="/">OrgaNice Spaces with Erum</HomeLink>
          </Text>
        </Row>
      </MobileWrapper>
    </Wrapper>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
