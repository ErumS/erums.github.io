import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.css';
import Theme from './theme';
import Menu from './menu';
import { Row } from './common';
import styled from 'styled-components';

const Div = styled.div`
  backdrop-filter: saturate(180%) blur(24px);

  &.theme {
    position: fixed;
    top: 0;

    @media (max-width: 767px) {
      top: 4px;
    }
  }

  &.menu {
    position: fixed;
    top: 36px;
    right: 0;

    @media (max-width: 767px) {
      top: 16px;
    }
  }
`;

const Main = styled.main`
  margin-top: 140px;

  @media (max-width: 767px) {
    margin-top: 116px;
  }
`;

const LayoutRow = styled(Row)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 140px;
  z-index: 1;

  @media (max-width: 767px) {
    height: 116px;
  }
`;

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <LayoutRow
        style={{ backdropFilter: 'saturate(180%) blur(24px)' }}
        justifyContent="space-between"
      >
        <Div className="theme">
          <Theme />
        </Div>
        <Div className="menu">
          <Menu location={location} />
        </Div>
      </LayoutRow>
      <Main>{children}</Main>
      <Footer location={location} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
