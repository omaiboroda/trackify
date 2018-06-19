import React from 'react';
import styled from 'styled-components';
import { Container, Flex, Box } from 'rebass';
import colors from '../utils/colors';

// eslint-disable-next-line react/prop-types
const RowUnstyled = ({ children, className, ...props }) => (
  <Box py={3} className={className} {...props}>
    <Container>
      <Flex>
        {children}
      </Flex>
    </Container>
  </Box>
);

const Row = styled(RowUnstyled)`
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: ${colors.main};
  }  
`;

export default Row;
