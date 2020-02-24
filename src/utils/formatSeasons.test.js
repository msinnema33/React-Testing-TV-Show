import React from 'react';
import { render } from '@testing-library/react';
import formatSeasons from './formatSeasons';

test('Seasons render properly', () => {
    render(<formatSeasons />);
});