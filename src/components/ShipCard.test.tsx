import React from 'react';
import { render, screen } from '@testing-library/react';
import { Ship } from '../contracts';
import ShipCard from './ShipCard';

const shipMock: Ship = {
  id: 1,
  name: 'Any name',
  image: 'http://anydomain.com/anyimage.png',
  home_port: 'Any home port',
  url: 'Any URL',
};

test('render ship information', () => {
  render(<ShipCard ship={shipMock} />);

  const image = screen.getByAltText(shipMock.name) as HTMLImageElement;
  expect(image).toBeInTheDocument();
  expect(image.src).toBe(shipMock.image);

  expect(screen.getByText(shipMock.name)).toBeInTheDocument();
  expect(screen.getByText(shipMock.home_port)).toBeInTheDocument();
});
