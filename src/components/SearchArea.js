import React from 'react';

const SearchForm = ({ movie }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      movie(e.target.elements[0].value);
    }}
  >
    <input type="text" />
    <input type="submit" />
  </form>
);

export default SearchForm;
