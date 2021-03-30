import React from 'react';
// import ReactDom from 'react-dom';
import { shallow } from 'enzyme'; // render just the componet but none of its children
import App from 'components/App';
import CommnetBox from 'components/CommentBox';
import CommnetList from 'components/CommentList';

/**
 * 1. Shows the Comment Box inside of it
 * 2. Shows the Comment List inside of it
 */


// it('shows a comment box', ()=> {
//   const div = document.createElement('div');
//   ReactDom.render(<App />, div);
  
//   // console.log(div.innerHTML)
//   expect(div.innerHTML).toContain('Comment Box')
//   ReactDom.unmountComponentAtNode(div)
// })

let wrapped;

beforeEach(()=> {
  wrapped = shallow(<App />); 
})

it('shows one comment box', ()=> {
  // find() returns an array
  expect(wrapped.find(CommnetBox).length).toEqual(1)
})

it('shows a comment list', ()=> {
  expect(wrapped.find(CommnetList).length).toEqual(1)
})