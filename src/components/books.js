import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { title, author } = props;
  return (
    <section className="book-container">
      <ul className="book-list">
        <li className="book">
          <div className="det-holder">
            <h1>{title}</h1>
            <p className="author">{author}</p>
            <div className="action-options">
              <button type="button" id="comment" name="comment" className="action">Comments</button>
              <button type="button" id="remove" name="remove" className="action">Remove</button>
              <button type="button" id="edit" name="edit" className="action">Edit</button>
            </div>
          </div>
          <div className="status">
            <button type="button" id="update" name="update">Check Status</button>
          </div>
        </li>
      </ul>
    </section>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
