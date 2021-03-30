import React from 'react';
// import ReactDom from 'react-dom';
import { shallow } from 'enzyme'; // render just the componet but none of its children
import App from 'components/App';
import CommnetBox from 'components/CommnetBox';
import CommnetList from 'components/CommentList';


// it('shows a comment box', ()=> {
//   const div = document.createElement('div');
//   ReactDom.render(<App />, div);
  
//   // console.log(div.innerHTML)
//   expect(div.innerHTML).toContain('Comment Box')
//   ReactDom.unmountComponentAtNode(div)
// })

it('shows one comment box', ()=> {
  const wrapped = shallow(<App />);

  // find() returns an array
  expect(wrapped.find(CommnetBox).length).toEqual(1)
})

it('shows a comment list', ()=> {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommnetList).length).toEqual(1)
})