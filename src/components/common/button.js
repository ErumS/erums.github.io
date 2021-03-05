import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Button = styled.button`
  background: ${({ background }) => background || COLORS.PRIMARY};
  color: ${({ color }) => color || COLORS.WHITE};
  font-size: ${({ size }) => size || '14px'};
  line-height: 18px;
  font-weight: 600;
  text-align: center;
  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  padding: 0 20px;
  width: ${({ width }) => width};
  height: ${({ height }) => height || '32px'};
`;

const ActionButton = props => {
  const { label } = props;

  return (
    <Button type="button" {...props}>
      {label}
    </Button>
  );
};

export default ActionButton;
