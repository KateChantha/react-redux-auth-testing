import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetchted 1' }, { name: 'Fetchted 2' }]
  })
});

afterEach(() => {
  moxios.uninstall();
});

// Attempt to render the entire app
// find the 'fectchComments' button and click it
// Expect to find a list of comments
it('can fetch a list of comments and display them', (done) => {
  // no need to pass in a store for this test manner
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  
  // simulate async request
  wrapped.find('.fetch-comments').simulate('click');
  // introduce some dalay before excecuted expect()
  // works like setTimeOut() but without having to know/pass in time ms.
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2); 
    
    // notify Jest that test will be done here inside the setTimeout, not right after calling the setTimeout
    done();
    wrapped.unmount()
  }, 100)
})