import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const TextComp = styled.div`
  font-family: ${({ family }) => family || 'sans-serif'};
  font-size: ${({ size }) => size || 'medium'};
  font-weight: ${({ weight }) => weight || '400'};
  color: ${({ color }) => color || COLORS.BLACK};
  line-height: ${({ lineHeight }) => lineHeight || '18'}px;
  text-align: ${({ align }) => align || 'left'};
  padding: ${({ padding }) => padding || '0'}px;
  width: ${({ width }) => width || 'auto'};

  @media (max-width: 767px) {
    font-size: ${({ mobileSize, size }) => mobileSize || size || 'small'};
    font-weight: ${({ mobileWeight, weight }) => mobileWeight || weight || '400'};
    color: ${({ mobileColor, color }) => mobileColor || color || COLORS.BLACK};
    line-height: ${({ mobileLineHeight, lineHeight }) =>
      mobileLineHeight || lineHeight || '18'}px;
    text-align: ${({ mobileAlign, align }) => mobileAlign || align || 'left'};
    padding: ${({ mobilePadding, padding }) => mobilePadding || padding || '0'}px;
    width: ${({ mobileWidth, width }) => mobileWidth || width || 'auto'};
  }
`;

const Text = props => {
  return <TextComp {...props} />;
};

export default Text;
