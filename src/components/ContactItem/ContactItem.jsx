import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}:</span>
      <span className={styles.number}>{contact.number}</span>
      <button
        type="button"
        onClick={onDelete}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;