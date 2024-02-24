/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());

    setInputValue("");
  };

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};
