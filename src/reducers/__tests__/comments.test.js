import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types'

/**
 * 1. Properly handle actions with type of SAVE_COMMENT
 * 2. Doesn't throw an error it it gets an action with any other type
 */

it('handle actions of type SAVE_COMMENT', () => {
  // mock payload
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(['New Comment'])
})

it('handles axtion with unknown type', ()=> {
  const newState = commentReducer([], {});
  expect(newState).toEqual([])
})