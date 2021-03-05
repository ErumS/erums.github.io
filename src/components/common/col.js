import React from 'react';
import styled from 'styled-components';

const Padding = styled.div`
  padding: ${({ gap }) => gap || '0'}px ${({ gutter }) => gutter || '4'}px;

  @media (max-width: 767px) {
    padding: ${({ mobileGap, gap }) => mobileGap || gap || '0'}px
      ${({ mobileGutter, gutter }) => mobileGutter || gutter || '4'}px;
  }
`;

const Col = props => {
  return <Padding {...props} />;
};

export default Col;
