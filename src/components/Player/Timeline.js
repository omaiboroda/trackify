import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Container = styled.div`
  width: 100%;
  height: 5px;
`;

const Progress = styled.div`
  width: ${props => props.progress * 100}%;
  height: 5px;
  background-color: ${colors.secondary};
`;

const Timeline = ({ progress }) => (
  <Container>
    <Progress progress={progress} />
  </Container>
);

Timeline.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Timeline;
