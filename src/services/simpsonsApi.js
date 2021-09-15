export const getQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const [quote] = await res.json();

  return {
    text: quote.quote,
    name: quote.character,
    image: quote.image,
  };
};
