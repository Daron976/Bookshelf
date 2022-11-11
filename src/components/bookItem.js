import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookItem } from '../redux/books/books';

const Books = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <li className="book">
      <div className="det-holder">
        <h1>{title}</h1>
        <p className="author">{author}</p>
        <div className="action-options">
          <button
            type="button"
            id="comment"
            name="comment"
            className="action"
          >
            Comments
          </button>
          <button
            type="button"
            id="remove"
            name="remove"
            className="action"
            onClick={() => dispatch(deleteBookItem(id))}
          >
            Remove
          </button>
          <button
            type="button"
            id="edit"
            name="edit"
            className="action"
          >
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Books;
