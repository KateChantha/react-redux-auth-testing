import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  
  expect(div.innerHTML).toContain('Hi there!')
});
