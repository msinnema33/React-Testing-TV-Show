import React from 'react';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test("renders App without crashing", () => {
    render(<App />);
  });



test('User is able to select a season', () => {

const { getByText } = render(<App />);


userEvent.click(getByText(/select a season/i))
getByText(/season 1/i);

});




