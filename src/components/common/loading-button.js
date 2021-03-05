import React from 'react';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../constants/colors';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingRingDiv = styled.div`
  display: inline-block;

  &:after {
    animation: ${rotate} 1.2s linear infinite;
    content: ' ';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid ${COLORS.BLACK};
    border-color: ${COLORS.BLACK} transparent ${COLORS.BLACK} transparent;
    padding: 10px;
    text-align: center;
  }
`;

const Loader = props => {
  const { show = true } = props;

  if (!show) return;
  return <LoadingRingDiv />;
};

export default Loader;
