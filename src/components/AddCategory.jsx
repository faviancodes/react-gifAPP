/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());

    setInputValue('');
  };

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
