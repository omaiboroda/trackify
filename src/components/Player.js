import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import throttle from 'lodash.throttle';
import Container from './Player/Container';
import Timeline from './Player/Timeline';
import Info from './Player/Info';
import Actions from './Player/Actions';

class Player extends Component {
  static propTypes = {
    artist: PropTypes.object,
    track: PropTypes.object,
  }

  static defaultProps = {
    artist: undefined,
    track: undefined,
  }

  constructor(props) {
    super(props);
    this.player = createRef();
    this.handleTimeChange = throttle(this.handleTimeChange, 1000).bind(this);
  }

  state = {
    isPlaying: true,
    currentTime: 0,
    // state.trackId is used in getDerivedStateFromProps
    // eslint-disable-next-line react/no-unused-state
    trackId: undefined,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.track) {
      if (props.track.id !== state.trackId) {
        return {
          trackId: props.track.id,
          isPlaying: true,
        };
      }
    }
    return null;
  }

  play = () => {
    this.setState({ isPlaying: true });
    this.player.current.play();
  }

  pause = () => {
    this.setState({ isPlaying: false });
    this.player.current.pause();
  }

  handleTimeChange = () => {
    const { currentTime } = this.player.current;
    this.setState({ currentTime });
  }

  isReady = () => {
    const { artist, track } = this.props;
    return artist && track;
  }

  render() {
    const { isPlaying, currentTime } = this.state;
    const { artist, track } = this.props;

    return (
      <Container>
        {
          this.isReady() && (
            <Box w={1}>
              <Timeline progress={currentTime / track.duration} />
              <Box mt={4} w={1}>
                <Flex alignItems="center">
                  <Box w={1}>
                    <Info
                      artist={artist}
                      track={track}
                    />
                  </Box>
                  <Actions
                    isPlaying={isPlaying}
                    onPause={this.pause}
                    onPlay={this.play}
                  />
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <audio
                    ref={this.player}
                    src={track.streamUrl}
                    onTimeUpdate={this.handleTimeChange}
                    autoPlay
                  />
                </Flex>
              </Box>
            </Box>
          )
        }
      </Container>
    );
  }
}

export default Player;
