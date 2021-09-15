/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SimmpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          character: 'Nelson Muntz',
          quote:
            'Shoplifting is a victimless crime, like punching someone in the dark.',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
        },
      ])
    );
  })
);

describe('SimmpsonsQuote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a button that fetches a random quote', async () => {
    render(<SimmpsonsQuote />);

    const fetchButton = screen.getByRole('button', { name: 'Fetch a quote!' });
    fireEvent.click(fetchButton);

    return waitFor(() => {
      screen.getByText(
        'Shoplifting is a victimless crime, like punching someone in the dark. - Nelson Muntz'
      );
    });
  });
});
