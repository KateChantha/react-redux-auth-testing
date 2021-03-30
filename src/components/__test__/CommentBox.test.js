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

// find the textarea element
// simulate a 'change' event
// provide a fake event object 
// -- in this case is ato mock event.target.value --> { target: { value: 'mock comment' }}
// force the component to update
// insert that the textareas value has change
it('has a text area that users can type in', () => {
  
  wrapped.find('textarea').simulate('change', { target: { value: 'mock comment' } });
  // update() does not force a re-render.
  wrapped.update();
  
  // .setProps() will force componet to rerender
  // wrapped.setProps({value: 'mock comment'})
  expect(wrapped.find('textarea').prop('value')).toEqual('mock comment')
})

it('when form is submitted, text area gets emptied', () => {
  // simulate type some input
  wrapped.find('textarea').simulate('change', { target: { value: 'mock comment' } });
  wrapped.update();
  // better to add an insertion to check, to avoid a falsy positive test 
  
  // simulate form submit
  wrapped.find('form').simulate('submit');
  wrapped.update();
  
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})