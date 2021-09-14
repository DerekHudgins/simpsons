import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {text} - {name}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;
