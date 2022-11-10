import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [titleValue, setTitleValue] = useState('');

  const [authorValue, setAuthorValue] = useState('');

  const titleInput = (e) => {
    setTitleValue(e.target.value);
  };

  const authorInput = (e) => {
    setAuthorValue(e.target.value);
  };

  const dispatch = useDispatch();

  const id = uuidv4();

  return (
    <section className="add-book">
      <h1>Add a new book</h1>
      <form action="" className="form-data">
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleInput}
          value={titleValue}
          placeholder="BookTitle"
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={authorInput}
          value={authorValue}
          placeholder="Author"
        />
        <button onClick={() => dispatch(addBook(id, titleValue, authorValue))} type="button" name="add" id="add">
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
