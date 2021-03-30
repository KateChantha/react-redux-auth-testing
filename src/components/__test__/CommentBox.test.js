import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';


// utilize FullDOM rendering just for practicing
// this test would be better to implement with Shallow

let wrapped;
beforeEach(()=> {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
    );
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
describe('the text area,', () => {
  beforeEach(() => {
    // simulate type some input
    wrapped.find('textarea').simulate('change', { target: { value: 'mock comment' } });
    // update() does not force a re-render.
    wrapped.update();
    // .setProps() will force componet to rerender
    // wrapped.setProps({value: 'mock comment'})
  })
  
  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('mock comment')
  })

  it('when form is submitted, text area gets emptied', () => {
    // simulate form submit
    wrapped.find('form').simulate('submit');
    wrapped.update();
    
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})