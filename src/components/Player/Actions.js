import React from 'react';
import PropTypes from 'prop-types';
import Play from 'react-icons/lib/fa/play';
import Pause from 'react-icons/lib/fa/pause';
import styled from 'styled-components';

const ActionsUnstyled = ({
  isPlaying, onPlay, onPause, className,
}) => (
  <div className={className}>
    {
      isPlaying ?
        <Pause size={36} onClick={onPause} /> :
        <Play size={36} onClick={onPlay} />
    }
  </div>
);

ActionsUnstyled.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const Actions = styled(ActionsUnstyled)`
  cursor: pointer;
`;

export default Actions;
