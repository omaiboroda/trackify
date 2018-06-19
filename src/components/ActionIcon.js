import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Row from './Row';

// eslint-disable-next-line react/prop-types
const ActionIcon = ({ className, children }) => (
  <Box className={className}>{children}</Box>
);
const Chevron = styled(ActionIcon)`
  visibility: hidden;
  ${Row}:hover & {
    visibility: visible;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
`;

export default Chevron;
