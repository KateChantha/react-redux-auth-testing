import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

/**
 * 1. Shows one li element per comment
 * 2. Text from each element is visible
 */

// wrappered by Root (HOCs to provide redux store)
let wrapped;
beforeEach(()=> {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
    );
})

it('creates one LI per comment', () => {
  // console.log(wrapped.find('li').length)
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
  // console.log(wrapped.render().text())
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})