import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';


// utilize FullDOM rendering just for practicing
// this test would be better to implement with Shallow

let wrapped;
beforeEach(()=> {
  wrapped = mount(<CommentBox />);
})

// clean up the compnent
afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  // console.log(wrapped.find('textarea').length)
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

