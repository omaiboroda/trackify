import React from 'react';
import styled from 'styled-components';
import ChevronRight from 'react-icons/lib/fa/chevron-right';
import { Box } from 'rebass';
import Row from '../../../components/Row';

// eslint-disable-next-line react/prop-types
const ChevronUnstyled = ({ className }) => (
  <Box className={className}><ChevronRight size={30} /></Box>
);
const Chevron = styled(ChevronUnstyled)`
  display: none;
  ${Row}:hover & {
    display: inline-block;
  }
`;

export default Chevron;
