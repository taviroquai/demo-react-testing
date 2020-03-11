import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import App from './App';

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox())
const fetchMock = require('node-fetch')

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText('click me');
  expect(btnElement).toBeInTheDocument();
});

test('button click', async (done) => {
  
  // Set expected result
  let expected = "delectus aut autem";

  // Mock fetch request
  let mockResponse = {
    "userId": 1,
    "id": 1,
    "title": expected,
    "completed": false
  };
  fetchMock.get('https://jsonplaceholder.typicode.com/todos/1', mockResponse);

  // Render component
  const { getByText } = render(<App />);
  screen.debug();

  // Click button
  const btnElement = getByText('click me');
  fireEvent.click(btnElement);

  // Check for result
  await wait(() => expect(getByText(expected)).toBeInTheDocument());
  screen.debug();

  // Clean up test
  fetchMock.restore();
  done();
});
