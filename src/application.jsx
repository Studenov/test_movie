import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { GlobalStyle } from './global_styles';
import { Navigator } from './navigation';

export const Application = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Navigator />
  </Provider>
);
