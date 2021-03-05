import styled from 'styled-components';

import Separator from './separator';
import Row from './flex';
import Button from './button';
import Text from './text';
import Input from './input';
import LoadingRing from './loading-button';
import Col from './col';

const DesktopWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export {
  Separator,
  Row,
  Button,
  Text,
  Input,
  LoadingRing,
  Col,
  DesktopWrapper,
  MobileWrapper,
};
