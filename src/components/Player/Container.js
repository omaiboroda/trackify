import React from 'react';
import { Container, Flex, Box } from 'rebass';

// eslint-disable-next-line react/prop-types
const PlayerContainer = ({ children, className }) => (
  <Box pb={3} minHeight={100} className={className}>
    <Container>
      <Flex>
        {children}
      </Flex>
    </Container>
  </Box>
);

export default PlayerContainer;
