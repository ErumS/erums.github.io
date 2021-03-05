import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { Row, Text, Col, Separator } from './common';
import MenuIcon from '../images/menu.png';
import './layout.css';
import COLORS from '../constants/colors';
import { MENU } from '../constants';

const DesktopWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const LinkText = styled(Text)`
  font-weight: ${({ selected }) => (selected ? 'bolder' : 'medium')};
  font-size: ${({ selected }) => (selected ? 'large' : 'normal')};

  ${({ footer }) =>
    footer &&
    css`
      font-size: ${({ selected }) => (selected ? 'small' : 'x-small')};
      text-decoration: underline;
      text-decoration-color: ${COLORS.THEME};
    `};
`;

const Wrapper = styled(Row)`
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 16px;
  }
`;

const MenuWrapper = styled.div`
  min-height: 300px;
  width: 100%;
  background: ${COLORS.FOOTER};
  position: relative;
  top: -40px;
  right: -16px;
  padding: 20px 20px 20px 40px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const footerMenu = (activePosition, setActivePosition) => {
  return (
    <Row gap={0}>
      {MENU.map(menu => (
        <Fragment key={menu.name}>
          <MenuLink to={menu.url}>
            <LinkText
              footer
              selected={activePosition === menu.id}
              color={COLORS.THEME}
              onClick={() => {
                setActivePosition(menu.id);
              }}
            >
              {menu.name}
            </LinkText>
          </MenuLink>
          <Col />
        </Fragment>
      ))}
    </Row>
  );
};

const getMenu = (activePosition, setActivePosition, isSideMenu = false) => {
  return MENU.map(menu => (
    <Fragment key={menu.name}>
      <MenuLink to={menu.url}>
        <LinkText
          page={menu.name}
          selected={activePosition === menu.id}
          color={COLORS.THEME}
          onClick={() => {
            setActivePosition(menu.id);
          }}
        >
          {menu.name}
        </LinkText>
      </MenuLink>
      {isSideMenu ? <Separator height={24} /> : <Col gutter={8} />}
    </Fragment>
  ));
};

const Menu = ({ footer, location }) => {
  const currentPathArray = MENU.filter(item => item.url === location);
  let currentPath = '/';
  if (currentPathArray.length) {
    currentPath = currentPathArray[0].id;
  }
  const [activePosition, setActivePosition] = useState(currentPath);
  const [isOpen, setOpen] = useState(false);

  if (footer) {
    return footerMenu(activePosition, setActivePosition);
  }

  return (
    <>
      <DesktopWrapper>
        <Wrapper justifyContent="space-between" gap={24} gutter={16}>
          {getMenu(activePosition, setActivePosition)}
        </Wrapper>
      </DesktopWrapper>
      <MobileWrapper>
        <Wrapper justifyContent="flex-end" gutter={16}>
          <img
            src={MenuIcon}
            alt="Menu"
            width={24}
            height={24}
            onClick={() => setOpen(true)}
          />
          {isOpen && (
            <MenuWrapper>
              <Text
                align="right"
                weight="bold"
                color={COLORS.THEME}
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </Text>
              <Separator height={16} />
              <Row direction="column" alignItems="flex-start">
                {getMenu(activePosition, setActivePosition, true)}
              </Row>
            </MenuWrapper>
          )}
        </Wrapper>
      </MobileWrapper>
    </>
  );
};

Menu.propTypes = {
  footer: PropTypes.bool,
};

Menu.defaultProps = {
  footer: false,
};

export default Menu;
