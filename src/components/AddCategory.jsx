import { useState } from "react";
import PropTypes from 'prop-types';


const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return ;
    onAddCategory(inputValue);
    setInputValue('');
  }


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
}


export default AddCategory;

