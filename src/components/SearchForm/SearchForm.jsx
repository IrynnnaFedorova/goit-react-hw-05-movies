import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Button from '../Button';
import c from './SearchForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInput = e => {
    setValue(e.target.value.toLowerCase());
  };

  const handleForm = e => {
    e.preventDefault();

    if (!value.trim()) {
      return toast.error('Please write your request', {
        autoClose: 3000,
      });
    }

    onSubmit(value);

    setValue('');
  };

  return (
    <form onSubmit={handleForm} className={c.form}>
      <label className={c.label}>
        <input
          type="text"
          value={value}
          onChange={handleInput}
          placeholder="Search movies"
          className={c.input}
          required
        />
      </label>
      <Button type="submit" title="Search" />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
