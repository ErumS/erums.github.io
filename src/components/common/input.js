import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Input = styled.input`
  background: ${({ background }) => background || COLORS.LIGHT_GRAY};
  color: ${({ color }) => color || COLORS.BLACK};
  font-size: ${({ size }) => size || '14px'};
  line-height: 18px;
  font-weight: 600;
  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  padding: 0 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height || '45px'};
`;

const ActionInput = props => {
  const { type = 'text' } = props;

  return <Input type={type} {...props}></Input>;
};

export default ActionInput;
