import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// This is a bit unoptimal, due to mixing of concerns of infinite scroll and positioned div, but
// does exectly what required, otherwise we would have problems with accessing target DOM element.
class ContentUnstyled extends Component {
  static propTypes = {
    onReachBottom: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.component = createRef();
  }

  componentDidMount() {
    const elem = this.component.current;
    elem.onscroll = () => {
      const isBottom = elem.scrollTop === elem.scrollHeight - elem.offsetHeight;
      if (isBottom) {
        this.props.onReachBottom();
      }
    };
  }

  render() {
    const { className, children } = this.props;
    return (
      <div ref={this.component} className={className}>
        {children}
      </div>
    );
  }
}

const Content = styled(ContentUnstyled)`
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  bottom: ${props => props.height};
  overflow: scroll;
`;

export default Content;
