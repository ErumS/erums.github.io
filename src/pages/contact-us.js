import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useForm } from '@formspree/react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Separator, Text, Row, Col } from '../components/common';
import COLORS from '../constants/colors';
import { SERVICES } from '../constants';
import GoogleMap from '../components/google-map';
import Location from '../images/location.png';
import Phone from '../images/phone.png';
import Email from '../images/email.png';
import Instagram from '../images/instagram.png';
import Facebook from '../images/facebook.png';

const Wrapper = styled.div`
  padding: 24px 48px 48px;

  @media (max-width: 767px) {
    padding: 24px 24px 64px;
  }
`;

const Box = styled.div`
  padding: 40px 40px;
  background: rgb(87, 154, 97, 0.15);
  border-radius: 16px;

  @media (max-width: 767px) {
    padding: 20px 40px;
  }
`;

const Label = styled.label`
  width: 45%;
`;

const Input = styled.input`
  width: 196px;
  height: 32px;
  font-size: smaller;
  font-weight: 400;
  font-family: open sans;
`;

const Select = styled.select`
  width: 196px;
  height: 32px;
  font-size: smaller;
  font-weight: 400;
  font-family: open sans;
`;

const Textarea = styled.textarea`
  max-width: 196px;
  min-width: 196px;
  min-height: 48px;
  max-height: 96px;
  font-size: smaller;
  font-weight: 400;
  font-family: open sans;
  line-height: 14px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  padding: 4px 12px;
  background: rgb(87, 154, 97, 0.75);
  border-radius: 8px;
  border: none;
  color: ${COLORS.WHITE};
  font-size: larger;
  font-weight: 700;
  font-family: open sans;
  cursor: pointer;
`;

const ExtraLink = styled(Link)`
  color: ${COLORS.THEME};
  text-decoration-color: ${COLORS.THEME};
  font-size: smaller;
`;

const ExtraLinkText = styled.div`
  color: ${COLORS.THEME};
  text-decoration: underline;
  text-decoration-color: ${COLORS.THEME};
  font-size: smaller;
  cursor: pointer;
`;

const PhoneText = styled.a`
  text-decoration: none;
`;

const handleSubmitButton = async (event, setFormLoaded, handleSubmit, setOtherOption) => {
  event.preventDefault();
  await handleSubmit(event);
  setFormLoaded(false);
  setOtherOption(false);
};

const loadForm = (
  state,
  handleSubmit,
  otherOption,
  setOtherOption,
  isFormLoaded,
  setFormLoaded,
) => {
  if (state.succeeded && !isFormLoaded) {
    return (
      <div>
        <Text align="center" color={COLORS.GRAY}>
          Thank you for showing interest in our services.
        </Text>
        <Text align="center" color={COLORS.GRAY}>
          We would get back to you soon!
        </Text>
        <Separator height={16} />
        <Row direction="column" width="100%" justifyContent="space-evenly">
          <ExtraLinkText onClick={() => setFormLoaded(true)}>
            Submit another Query
          </ExtraLinkText>
          <ExtraLink to="/our-services/">View more services</ExtraLink>
        </Row>
      </div>
    );
  }
  if (state.errors.length && !isFormLoaded) {
    return (
      <div>
        <Text align="center" color={COLORS.GRAY}>
          We are sorry! The form could not be submitted due to internal errors.
        </Text>
        <Text align="center" color={COLORS.GRAY}>
          Please mail us your queries directly at{' '}
          <PhoneText
            href={`mailto:organicespaceswitherum@gmail.com?subject=Enquiry about organizing services`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text align="center" color={COLORS.THEME}>
              organicespaceswitherum@gmail.com
            </Text>
          </PhoneText>
          .
        </Text>
        <Separator height={8} />
        <Row direction="column" width="100%" justifyContent="space-evenly">
          <ExtraLinkText onClick={() => setFormLoaded(true)}>Try Again</ExtraLinkText>
          <ExtraLink to="/our-services/">View more services</ExtraLink>
        </Row>
      </div>
    );
  }

  if (isFormLoaded) {
    return (
      <form
        onSubmit={e => handleSubmitButton(e, setFormLoaded, handleSubmit, setOtherOption)}
      >
        <Row direction="column">
          <Row justifyContent="space-between" width="100%">
            <Label htmlFor="name">
              <Text size="large" color={COLORS.GRAY}>
                Your Name<span style={{ color: 'red' }}>*</span>
              </Text>
            </Label>
            <Input id="name" type="text" name="name" required />
          </Row>
          <Separator height={24} />
          <Row justifyContent="space-between" width="100%">
            <Label htmlFor="email">
              <Text size="large" color={COLORS.GRAY}>
                Email Id<span style={{ color: 'red' }}>*</span>
              </Text>
            </Label>
            <Input id="email" type="email" name="email" required />
          </Row>
          <Separator height={24} />
          <Row justifyContent="space-between" width="100%">
            <Label htmlFor="phone">
              <Text size="large" color={COLORS.GRAY}>
                Contact Number(with country code)<span style={{ color: 'red' }}>*</span>
              </Text>
            </Label>
            <Input id="phone" type="number" name="phone" required />
          </Row>
          <Separator height={24} />
          <Row justifyContent="space-between" width="100%">
            <Label htmlFor="services">
              <Text size="large" color={COLORS.GRAY}>
                Description of services you are interested in
                <span style={{ color: 'red' }}>*</span>
              </Text>
            </Label>
            <Select
              name="services"
              id="services"
              onChange={e =>
                e.target.value === 'other' ? setOtherOption(true) : setOtherOption(false)
              }
              required
            >
              <option value="">---Select---</option>
              {SERVICES.map(service => (
                <option key={service.name} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="other">Other</option>
            </Select>
          </Row>
          <Separator height={24} />
          {otherOption && (
            <>
              <Row justifyContent="space-between" width="100%">
                <Label htmlFor="other">
                  <Text size="large" color={COLORS.GRAY}>
                    Enter you custom requirements<span style={{ color: 'red' }}>*</span>
                  </Text>
                </Label>
                <Textarea id="other" name="other" required />
              </Row>
              <Separator height={24} />
            </>
          )}
          <Row justifyContent="space-between" width="100%">
            <Label htmlFor="query">
              <Text size="large" color={COLORS.GRAY}>
                Any queries and/or difference of opinion
                <span style={{ color: 'red' }}>*</span>
              </Text>
            </Label>
            <Textarea id="query" name="query" defaultValue="NA" required />
          </Row>
          <Separator height={32} />
          <Button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending' : 'Send'}
          </Button>
        </Row>
      </form>
    );
  }
};

const Contact = props => {
  const { location: { pathname } = {} } = props;
  const [state, handleSubmit] = useForm('mqkgjekq');
  const [otherOption, setOtherOption] = useState(false);
  const [isFormLoaded, setFormLoaded] = useState(true);

  return (
    <Layout location={pathname}>
      <SEO
        title="Contact Professional Organizers in India, Udaipur"
        description="Contact home organizers, contact professional organizers in india, contact organizers in Udaipur"
      />
      <Wrapper>
        <h1>
          <Text color={COLORS.THEME} size="xx-large" weight="700" align="center">
            Drop us a contact for Services or any Queries
          </Text>
        </h1>
        <Separator height={48} />
        <Row mobileDirection="column" justifyContent="space-around">
          <Box>
            {loadForm(
              state,
              handleSubmit,
              otherOption,
              setOtherOption,
              isFormLoaded,
              setFormLoaded,
            )}
          </Box>
          <Box>
            <GoogleMap />
            <Separator height={24} />
            <Row>
              <img src={Location} width={20} height={20} alt="Location" />
              <Col />
              <Text color={COLORS.LIGHT_GRAY} weight="bold" size="smaller">
                Udaipur, Rajasthan, India, 313004 (Working Pan India)
              </Text>
            </Row>
            <Separator height={12} />
            <Row>
              <img src={Phone} width={20} height={20} alt="Call us" />
              <Col />
              <a
                style={{ textDecoration: 'none' }}
                href="tel:+917014418191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color={COLORS.LIGHT_GRAY} weight="bold" size="smaller">
                  Ph. +91 7014418191
                </Text>
              </a>
            </Row>
            <Separator height={12} />
            <Row>
              <img src={Email} width={20} height={20} alt="Email us" />
              <Col />
              <a
                style={{ textDecoration: 'none' }}
                href="mailto:organicespaceswitherum@gmail.com?subject=Enquiry about organizing services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color={COLORS.LIGHT_GRAY} weight="bold" size="smaller">
                  organicespaceswitherum@gmail.com
                </Text>
              </a>
            </Row>
            <Separator height={12} />
            <Row style={{ marginLeft: '-3px' }}>
              <img src={Instagram} width={24} height={24} alt="Find us on instagram" />
              <Col />
              <a
                style={{ textDecoration: 'none' }}
                href="http://instagram.com/_u/organice_spaces_with_erum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color={COLORS.LIGHT_GRAY} weight="bold" size="smaller">
                  organice_spaces_with_erum
                </Text>
              </a>
            </Row>
            <Separator height={12} />
            <Row>
              <img src={Facebook} width={20} height={20} alt="Find us on facebook" />
              <Col />
              <a
                style={{ textDecoration: 'none' }}
                href="https://facebook.com/OrgaNiceSpaceswithErum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color={COLORS.LIGHT_GRAY} weight="bold" size="smaller">
                  OrgaNiceSpaceswithErum
                </Text>
              </a>
            </Row>
          </Box>
        </Row>
      </Wrapper>
    </Layout>
  );
};

export default Contact;
