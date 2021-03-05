import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: ${({ height }) => height || '0'}px;
  background: ${({ background }) => background || 'transparent'};
  width: ${({ width }) => width || '100%'};
  opacity: 0.25;

  @media (max-width: 767px) {
    height: ${({ mobileHeight, height }) => mobileHeight || height || '0'}px;
  }
`;

const Separator = props => {
  return <Container {...props} />;
};

export default Separator;
