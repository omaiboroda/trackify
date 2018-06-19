import styled from 'styled-components';
import colors from '../utils/colors';

const Balcony = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${props => props.height};
  background-color: ${colors.main};
`;

export default Balcony;
