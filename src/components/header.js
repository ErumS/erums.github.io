import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../constants/colors';
import { Row, Text, Col, DesktopWrapper, MobileWrapper, Separator } from './common';
import PhoneIcon from '../images/phone.png';
import EmailIcon from '../images/email.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whatsapp.png';

const Wrapper = styled.header`
  background: ${COLORS.THEME};
  width: 100%;
  padding: 4px 5%;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const FullWidthRow = styled(Row)`
  width: 100%;
`;

const PhoneText = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  vertical-align: middle;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          details {
            phone_number
            email
          }
        }
      }
    }
  `);

  return (
    <>
      <DesktopWrapper>
        <Wrapper>
          <Row justifyContent="space-between">
            <Row>
              <img src={PhoneIcon} alt="Phone" height="32" width="32" />
              <Col />
              <PhoneText
                href={`tel:${data.site.siteMetadata.details.phone_number}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color={COLORS.WHITE}>
                  {data.site.siteMetadata.details.phone_number}
                </Text>
              </PhoneText>
            </Row>
            <Row>
              <img src={EmailIcon} alt="Email" height="32" width="32" />
              <Col />
              <PhoneText
                href={`mailto:${data.site.siteMetadata.details.email}?subject=Enquiry about organizing services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color={COLORS.WHITE}>{data.site.siteMetadata.details.email}</Text>
              </PhoneText>
            </Row>
            <Row>
              <PhoneText
                href="http://instagram.com/_u/organice_spaces_with_erum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img src={Instagram} alt="instagram" height="36" width="36" />
              </PhoneText>
              <Col gutter={8} />
              <PhoneText
                href="https://facebook.com/OrgaNiceSpaceswithErum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img src={Facebook} alt="facebook" height="32" width="32" />
              </PhoneText>
              <Col gutter={8} />
              <PhoneText
                href={`https://api.whatsapp.com/send?phone=+917014418191`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img src={Whatsapp} alt="whatsapp" height="32" width="32" />
              </PhoneText>
            </Row>
          </Row>
        </Wrapper>
      </DesktopWrapper>
      <MobileWrapper>
        <Wrapper>
          <Row direction="column" justifyContent="center">
            <Row justifyContent="center">
              <img src={EmailIcon} alt="Email" height="16" width="16" />
              <Col />
              <PhoneText
                href={`mailto:${data.site.siteMetadata.details.email}?subject=Enquiry about organizing services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text size="12px" color={COLORS.WHITE}>
                  {data.site.siteMetadata.details.email}
                </Text>
              </PhoneText>
            </Row>
            <Separator height={4} />
            <FullWidthRow justifyContent="space-between">
              <Row>
                <img src={PhoneIcon} alt="Phone" height="16" width="16" />
                <Col gutter={2} />
                <PhoneText
                  href={`tel:${data.site.siteMetadata.details.phone_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text size="12px" color={COLORS.WHITE}>
                    {data.site.siteMetadata.details.phone_number}
                  </Text>
                </PhoneText>
              </Row>
              <Row>
                <PhoneText
                  href="http://instagram.com/_u/organice_spaces_with_erum/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={Instagram} alt="instagram" height="18" width="18" />
                </PhoneText>
                <Col />
                <PhoneText
                  href="fb://page/106259094692457"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={Facebook} alt="facebook" height="16" width="16" />
                </PhoneText>
                <Col />
                <PhoneText
                  href={`https://api.whatsapp.com/send?phone=+917014418191`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={Whatsapp} alt="whatsapp" height="16" width="16" />
                </PhoneText>
              </Row>
            </FullWidthRow>
          </Row>
        </Wrapper>
      </MobileWrapper>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
