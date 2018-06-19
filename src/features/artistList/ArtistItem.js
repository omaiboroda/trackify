import React, { Fragment } from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
} from 'rebass';
import PropTypes from 'prop-types';
import Hide from '../../utils/Hide';
import Chevron from './ArtistItem/Chevron';
import { Row, LinkUnstyled } from '../../components';

const ArtistItem = ({ artist }) => (
  <LinkUnstyled to={`/${artist.permalink}/tracks`}>
    <Row>
      <Fragment>
        <Box><Avatar src={artist.avatarUrl} /></Box>
        <Flex width={1} alignItems="center">
          <Box ml={3} width={1}>
            <Text>{artist.username}</Text>
          </Box>
          <Hide breakpoints={[0, 1]}>
            <Box><Chevron /></Box>
          </Hide>
        </Flex>
      </Fragment>
    </Row>
  </LinkUnstyled>
);

ArtistItem.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistItem;
