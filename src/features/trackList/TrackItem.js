import React, { Fragment } from 'react';
import { Box, Flex, Text, Avatar } from 'rebass';
import PropTypes from 'prop-types';
import Play from 'react-icons/lib/fa/play-circle';
import ActionIcon from '../../components/ActionIcon';
import Hide from '../../utils/Hide';
import { Row } from '../../components';

const humanise = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${(`0${remainingSeconds}`).slice(-2)}`;
};

const TrackItem = ({
  track, artist, onTrackChange, currentTrack,
}) => (
  <Row onClick={() => onTrackChange(track, artist)}>
    <Fragment>
      <Box><Avatar borderRadius={0} size={64} src={track.artworkUrlRetina} /></Box>
      <Flex width={1} alignItems="center">
        <Box ml={3} width={1}>
          <Flex flexDirection="column">
            <Text
              fontWeight={(currentTrack && currentTrack.id === track.id) ? 'bold' : 'normal'}
            >
              {track.title}
            </Text>
          </Flex>
        </Box>
        <Hide breakpoints={[0, 1]}>
          <Flex alignItems="center">
            <Box mr={3}><Text>{humanise(track.duration)}</Text></Box>
            <ActionIcon><Play size={48} /></ActionIcon>
          </Flex>
        </Hide>
      </Flex>
    </Fragment>
  </Row>
);

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
  artist: PropTypes.object.isRequired,
  onTrackChange: PropTypes.func.isRequired,
  currentTrack: PropTypes.object,
};

TrackItem.defaultProps = {
  currentTrack: undefined,
};

export default TrackItem;
