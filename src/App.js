import React from 'react';
import { Provider } from 'rebass';
import { injectGlobal } from 'styled-components';
import Layout from './features/Layout';
import colors from './utils/colors';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0; 
    width: 100%;
    background-color: ${colors.backgound};
    color: ${colors.white};
  }
`;

const App = () => (
  <Provider>
    <Layout />
  </Provider>
);

export default App;
