import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Root from 'Root';
import App from 'components/App';

ReactDom.render(
  <Root>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);

// TODO: refactor to this structure
// ReactDom.render(
//   <Root>
//     <App />
//   </Root>,
//   document.querySelector('#root')
// );