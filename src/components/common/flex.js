import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: wrap;
  padding: ${({ gap }) => gap || '0'}px ${({ gutter }) => gutter || '0'}px;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  background: ${({ background }) => background || 'transparent'};
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || 'auto'};

  @media (max-width: 767px) {
    flex-direction: ${({ mobileDirection, direction }) =>
      mobileDirection || direction || 'row'};
    padding: ${({ mobileGap, gap }) => mobileGap || gap || '0'}px
      ${({ mobileGutter, gutter }) => mobileGutter || gutter || '0'}px;
  }
`;

const FlexRow = props => {
  return <Row {...props} />;
};

export default FlexRow;
