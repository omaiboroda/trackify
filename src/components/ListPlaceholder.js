import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import Row from './Row';
import colors from '../utils/colors';

const Avatar = styled.div`
  background-color: ${colors.main};
  min-width: 48px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const ContentPlaceholder = styled.div`
  background-color: ${colors.main};
  width: 40%;
  height: 16px;
`;

const RowPlaceholder = () => (
  <Flex alignItems="center">
    <Avatar />
    <Box mx={3} w={1}><ContentPlaceholder /></Box>
  </Flex>
);


const ListPlaceholder = ({ count }) => {
  let items = [];
  for (let i = 0; i < count; i += 1) {
    const node = <Row key={i}><Box w={1}><RowPlaceholder /></Box></Row>;
    items = [...items, node];
  }

  return items;
};

export default ListPlaceholder;
