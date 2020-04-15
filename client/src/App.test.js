import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';
import '@testing-library/jest-dom/extend-expect';


test('app renders without crashing', () => {
  render(<App/>);
});

test('renders navbar header', () => {
  const { getByText } = render(<App/>);
  const linkElement = getByText(/Womens World Cup Players/i);
  expect(linkElement).toBeVisible();
});

test('renders navbar header', () => {
  render(<Navbar/>)
});



