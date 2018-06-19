import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Flex, Text } from 'rebass';
import Hide from '../../utils/Hide';

const Info = ({ artist, track }) => (
  <Flex>
    <Hide breakpoints={[0]}>
      <Avatar
        size={64}
        borderRadius={0}
        src={artist.avatarUrl}
      />
    </Hide>
    <Flex flexDirection="column" ml={3} justifyContent="space-around">
      <Text fontWeight="bold">{artist.username}</Text>
      <Text>{track.title}</Text>
    </Flex>
  </Flex>
);

Info.propTypes = {
  artist: PropTypes.object.isRequired,
  track: PropTypes.object.isRequired,
};

export default Info;

