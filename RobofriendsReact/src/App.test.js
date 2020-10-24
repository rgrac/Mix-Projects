import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<AppForRobots />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
