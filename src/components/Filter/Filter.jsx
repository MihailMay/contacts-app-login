import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={handleChange}
          className={styles.input}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;