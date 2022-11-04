import React from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  const { title, author } = props;
  return (
    <section className="add-book">
      <h1>Add a new book</h1>
      <form action="" className="form-data">
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="BookTitle"
        />
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          placeholder="Author"
        />
        <button type="button" name="add" id="add">
          Add Book
        </button>
      </form>
    </section>
  );
};

AddBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default AddBook;
