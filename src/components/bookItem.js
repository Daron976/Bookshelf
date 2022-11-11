import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookItem } from '../redux/books/books';
import spinner from '../images/spinner.png';

const Books = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <li className="book">
      <div className="det-holder">
        <p className="category">{category}</p>
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
      <div className="status">
        <img src={spinner} alt="progression circle" className="spinner-img" />
        <div>
          <p className="percentage">0%</p>
          <p className="status-details">Incomplete</p>
        </div>
      </div>
      <section className="position">
        <h2 className="pos-header">CURRENT CHAPTER</h2>
        <p className="pos-details">Chapter 1</p>
        <div>
          <button type="button" name="update" id="update">UPDATE PREGRESS</button>
        </div>
      </section>
    </li>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
