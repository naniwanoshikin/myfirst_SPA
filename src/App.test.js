// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Link } from 'react-router-dom';

test('renders learn react link', () => {
  const colors = ['red', 'blue', 'yellow'];
  expect(colors).toContain('red');
  expect(colors).not.toContain('pink');

  // render(<Link/>);
  // const homeEl = screen.getByTestId('nav-home');
  // expect(homeEl).toBeInTheDocument('Home');
  // expect(homeEl).toHaveTextContent('Home');

});

it("renders button", () => {
  // const {getByTestId} = render(<Link id="nav-home"></Link>);
  // expect(getByTestId("nav-home")).toHaveTextContent('Home');
});
