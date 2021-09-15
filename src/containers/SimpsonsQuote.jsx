import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { getQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    const quote = await getQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={clickHandler} />
      {loading ? (
        <img
          src={'https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif'}
          alt="spinner"
        />
      ) : (
        quote && (
          <Quote text={quote.text} name={quote.name} image={quote.image} />
        )
      )}
    </>
  );
};

export default SimpsonsQuote;
