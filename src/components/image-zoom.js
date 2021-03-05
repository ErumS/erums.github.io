import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../constants/colors';
import { Row, Text } from './common';

const Wrapper = styled(Row)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 3;
  position: fixed;
  top: 0;
  overflow: auto;
`;

const CloseButton = styled(Text)`
  position: fixed;
  top: 0;
  right: 0;
  padding: 24px;
  cursor: pointer;
`;

const Img = styled.img`
  max-height: calc(100vh - 20px);
  max-width: calc(100vw - 20px);
`;

const ImageZoom = ({ image, onClose }) => {
  return (
    <Wrapper gap={24} gutter={24} justifyContent="center">
      <CloseButton
        size="xxx-large"
        mobileSize="xx-large"
        weight="bold"
        color={COLORS.WHITE}
        onClick={() => onClose()}
      >
        x
      </CloseButton>
      <Img src={image} alt="Gallery of Professional Organizer" />
    </Wrapper>
  );
};

ImageZoom.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageZoom;
